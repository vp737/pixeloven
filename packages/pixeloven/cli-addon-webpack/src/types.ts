import { Options as BundlerOptions } from "@pixeloven-webpack/bundler";
import { Options as CompilerOptions } from "@pixeloven-webpack/config";
import { Options as ServerOptions } from "@pixeloven-webpack/server";
import { PixelOvenToolbox } from "@pixeloven/cli";

export enum ErrorCode {
    InvalidArgument = 1,
    InvalidTask,
    FailedBundling,
    FailedClientBundling,
    FailedServerBundling,
    MissingTask,
    MissingTarget,
}

export enum WebpackExtensionType {
    build = "build",
    start = "start",
}

export interface WebpackExtensionOptions {
    type: WebpackExtensionType;
    bundlerOptions?: BundlerOptions;
    compilerOptions: CompilerOptions[];
    serverOptions?: ServerOptions;
}

/* Note: keep this enum up to date matching the options interface above for runtime argument checking */
export enum WebpackExecutionOptionTypes {
    "allow-externals" = "allow-externals",
    "allowExternals" = "allowExternals",
    "circular-dep-check" = "circular-dep-check",
    "circularDepCheck" = "circularDepCheck",
    "client" = "client",
    "development" = "development",
    "entry" = "entry",
    "host" = "host",
    "namespace" = "namespace",
    "ignored" = "ignored",
    "library" = "library",
    "path" = "path",
    "poll" = "poll",
    "port" = "port",
    "protocol" = "protocol",
    "profile" = "profile",
    "server" = "server",
    "static-asset-path" = "static-asset-path",
    "staticAssetPath" = "staticAssetPath",
    "stats" = "stats",
    "stats-dir" = "stats-dir",
    "statsDir" = "statsDir",
    "stats-host" = "stats-host",
    "statsHost" = "statsHost",
    "stats-port" = "stats-port",
    "statsPort" = "statsPort",
    "source-map" = "source-map",
    "sourceMap" = "sourceMap",
}

export type WebpackExtension = (
    options: WebpackExtensionOptions,
) => Promise<number>;

export interface AddonWebpackToolbox extends PixelOvenToolbox {
    webpack: WebpackExtension;
}
