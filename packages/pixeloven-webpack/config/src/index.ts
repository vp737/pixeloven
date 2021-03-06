import { removeEmpty } from "@pixeloven-core/common";
import { getUtils } from "@pixeloven-core/env";
import { resolveSourceRoot, resolveTsConfig } from "@pixeloven-core/filesystem";
import tsLoader from "@pixeloven-webpack/ts-loader";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TimeFixPlugin from "time-fix-plugin";
import webpack, { Configuration } from "webpack";
import ManifestPlugin from "webpack-manifest-plugin";
import { Options } from "./types";

import { createCircularDependencyPlugin } from "./CircularDependencyPlugin";
import { createForkTsCheckerWebpack } from "./ForkTsCheckerWebpackPlugin";

import { getSetup } from "./helpers/shared";

function getConfig(options: Options) {
    /**
     * Utility functions to help segment configuration based on environment
     */
    const { ifProduction, ifDevelopment, ifClient } = getUtils({
        mode: options.mode,
        name: options.name,
        target: options.target,
    });

    const {
        getDevTool,
        getEntry,
        getExternals,
        getMode,
        getModuleFileLoader,
        getModuleSCSSLoader,
        getNode,
        getOptimization,
        getOutput,
        getPerformance,
        getPluginBundleAnalyzer,
        getResolve,
    } = getSetup(options);

    /**
     * @todo Look into https://github.com/mzgoddard/hard-source-webpack-plugin
     */
    const plugins = ifClient(
        removeEmpty([
            /**
             * Fixes a known issue with cross-platform differences in file watchers,
             * so that webpack doesn't lose file changes when watched files change rapidly
             * https://github.com/webpack/webpack-dev-middleware#known-issues
             *
             * @env development
             */
            ifDevelopment(new TimeFixPlugin()),
            /**
             * Watcher doesn"t work well if you mistype casing in a path so we use
             * a plugin that prints an error when you attempt to do this.
             * See https://github.com/facebookincubator/create-react-app/issues/240
             *
             * @env development
             */
            ifDevelopment(new CaseSensitivePathsPlugin()),
            /**
             * Allows for circular dependency detection
             *
             * @todo should determine why we can't just push errors/strings to compilation.warnings
             */
            createCircularDependencyPlugin({
                circularDepCheck: options.circularDepCheck,
                limitCyclesDetected: 3,
            }),
            /**
             * Helps prevent hashes from updating if a bundle hasn't changed.
             * @env all
             *
             * @todo should we use webpack.ids.DeterministicModuleIdsPlugin instead?
             */
            new webpack.HashedModuleIdsPlugin(),
            /**
             * Moment.js is an extremely popular library that bundles large locale files
             * by default due to how Webpack interprets its code. This is a practical
             * solution that requires the user to opt into importing specific locales.
             * @url https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
             * @env all
             */
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            /**
             * Does a string replacement for specific env variables
             * @description Provides entry point specific env variables
             * @env all
             */
            new webpack.EnvironmentPlugin({
                NAME: options.name,
                PUBLIC_PATH: options.publicPath,
                TARGET: options.target,
            }),
            /**
             * Perform type checking and linting in a separate process to speed up compilation
             * @env all
             */
            createForkTsCheckerWebpack({
                mode: options.mode,
                name: options.name,
                target: options.target,
                tsConfig: resolveTsConfig(),
            }),
            /**
             * Extract css to file
             * @env production
             */
            new MiniCssExtractPlugin({
                chunkFilename: ifProduction(
                    `${options.staticAssetPath}/css/[name].[contenthash].css`,
                    `${options.staticAssetPath}/css/[name].[hash].css`,
                ),
                filename: ifProduction(
                    `${options.staticAssetPath}/css/[name].[contenthash].css`,
                    `${options.staticAssetPath}/css/[name].[hash].css`,
                ),
            }),
            getPluginBundleAnalyzer(options.stats),
            /**
             * Generate a manifest file which contains a mapping of all asset filenames
             * to their corresponding output file so that tools can pick it up without
             * having to parse `index.html`.
             *
             * @env production
             */
            ifProduction(
                new ManifestPlugin({
                    fileName: "asset-manifest.json",
                }),
            ),
            /**
             * This is necessary to emit hot updates (currently CSS only):
             *
             * @env development
             */
            ifDevelopment(new webpack.HotModuleReplacementPlugin()),
        ]),
        removeEmpty([
            /**
             * Fixes a known issue with cross-platform differences in file watchers,
             * so that webpack doesn't lose file changes when watched files change rapidly
             * https://github.com/webpack/webpack-dev-middleware#known-issues
             *
             * @env development
             */
            ifDevelopment(new TimeFixPlugin()),
            /**
             * Watcher doesn"t work well if you mistype casing in a path so we use
             * a plugin that prints an error when you attempt to do this.
             * See https://github.com/facebookincubator/create-react-app/issues/240
             *
             * @env development
             */
            ifDevelopment(new CaseSensitivePathsPlugin()),
            /**
             * Allows for circular dependency detection
             *
             * @todo should determine why we can't just push errors/strings to compilation.warnings
             */
            createCircularDependencyPlugin({
                circularDepCheck: options.circularDepCheck,
                limitCyclesDetected: 3,
            }),
            /**
             * Moment.js is an extremely popular library that bundles large locale files
             * by default due to how Webpack interprets its code. This is a practical
             * solution that requires the user to opt into importing specific locales.
             * @url https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
             * @env all
             */
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            /**
             * Define environmental variables base on entry point
             * @description Provides entry point specific env variables
             *
             * @env all
             */
            new webpack.EnvironmentPlugin({
                NAME: options.name,
                PUBLIC_PATH: options.publicPath,
                TARGET: options.target,
            }),
            getPluginBundleAnalyzer(options.stats),
            /**
             * Forks TS compiler into a seperate process
             */
            createForkTsCheckerWebpack({
                mode: options.mode,
                name: options.name,
                target: options.target,
                tsConfig: resolveTsConfig(),
            }),
        ]),
    );

    /**
     * Client side configuration
     */
    return removeEmpty({
        bail: ifProduction(),
        devtool: getDevTool(),
        entry: getEntry(),
        externals: getExternals(),
        mode: getMode(),
        module: {
            rules: [
                {
                    oneOf: [
                        /**
                         * Sets express 4.x view to null. We use our own custom react renderer and have no use for this feature.
                         * Ideally express would make this modular but with this we can optimize express for SSR.
                         *
                         * @note Side effect is none of the features associated with express template rendering will work.
                         * https://expressjs.com/en/api.html#res.render
                         */
                        {
                            test: /express\/lib\/view.js$/,
                            use: [
                                {
                                    loader: require.resolve("null-loader"),
                                },
                            ],
                        },
                        /**
                         * Allows us to handle mjs.
                         */
                        {
                            test: /.mjs$/,
                            type: "javascript/auto",
                            use: [
                                {
                                    loader: require.resolve("babel-loader"),
                                },
                            ],
                        },
                        {
                            include: resolveSourceRoot(),
                            test: [/\.(js|jsx|mjs)$/, /\.(ts|tsx)$/],
                            use: tsLoader,
                        },
                        getModuleSCSSLoader(),
                        getModuleFileLoader(),
                    ],
                },
            ],
            strictExportPresence: true,
        },
        name: options.name,
        node: getNode(),
        optimization: getOptimization(),
        output: getOutput(),
        performance: getPerformance(),
        plugins,
        profile: options.profiling,
        resolve: getResolve(),
        stats: "verbose",
        target: options.target,
    }) as Configuration;
}

export { getConfig, Options };
