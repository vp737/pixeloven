import { AddonWebpackToolbox, WebpackExecutionOptionTypes, WebpackExtensionType } from "../types";

export default {
    alias: ["--webpack", "-w"],
    name: "webpack",
    run: async (toolbox: AddonWebpackToolbox) => {
        const { parameters, pixelOven, webpack } = toolbox;
        const task = parameters.first;
        if (!task) {
            pixelOven.invalidArgument("Must provide a task for Webpack to run.");
            pixelOven.exit("Webpack", 1);
            return;
        }
        if (!WebpackExtensionType.hasOwnProperty(task)) {
            pixelOven.invalidArgument(`Available Webpack tasks are "build" or "start".`, task);
            pixelOven.exit("Webpack", 1);
            return;
        }

        switch (task) {
            case "build":
            case "start": {
                Object.keys(parameters.options).forEach(option => {
                    if (!WebpackExecutionOptionTypes.hasOwnProperty(option)) {
                        pixelOven.invalidArgument(`Available options for "${task}" are "--path", "--source-map", or "--stats"`, `--${option}`);
                        pixelOven.exit("Storybook", 1);
                    }
                });

                /**
                 * @todo Need to type the all the options for this CLI
                 */
                const statusCode = await webpack({
                    buildOptions: {
                        outputPath: "./dist",
                    },
                    compilerOptions: {
                        outputPath: "./dist",
                        path: parameters.options.path,
                        withProfiling: parameters.options.profile,
                        withSourceMap: parameters.options.sourceMap,
                        withStats: parameters.options.stats,
                        withStatsDir: parameters.options.statsDir,
                        withStatsHost: parameters.options.statsHost,
                        withStatsPort: parameters.options.statsPort,
                    },
                    serverOptions: {
                        host: parameters.options.host,
                        ignored: parameters.options.ignored,
                        path: parameters.options.path,
                        poll: parameters.options.poll,
                        port: parameters.options.port,
                        protocol: parameters.options.protocol,
                    },
                    type: WebpackExtensionType[task],
                });
                pixelOven.exit(
                    "Webpack",
                    statusCode,
                    `Success! Pack your bags we're going home. \n`,
                );
                break;
            }
            default: {
                pixelOven.invalidArgument();
                break;
            }
        }
    },
};
