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

interface RunResponse {
    stdout?: Buffer | string;
    status: number;
    error?: Error;
}

export type TsLintExtension = (args: string[]) => Promise<RunResponse>;

export interface AddonTsLintToolbox extends PixelOvenToolbox {
    tsLint: TsLintExtension;
}
