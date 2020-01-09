#!/usr/bin/env node
const {
    FileSystem,
    Logger,
    Process
} = require("@pixeloven-tooling/common");

const tsLintJson = "tslint.json";
const styleLintJson = "stylelint.json";

/**
 * Linter for PixelOven workflow
 * @param {*} argv 
 */
async function main(proc) {
    let statusCode = 0;
    const params = Process.getParameters(proc.argv);
    const firstArg = params.args.shift();
    
    function config(fileName) {
        const cwd = proc.cwd();
        const configPath = FileSystem.getPath(`${cwd}/${fileName}`);
        if (configPath) {
            Logger.info(`linter ${firstArg}`, `found configuration ${configPath}`);
        } else {
            Logger.warn(`linter ${firstArg}`, `could not find configuration file ${fileName} in current working directory`);
        }
        return configPath;
    }
    /**
     * @todo We should be smarter about this.
     */
    const options = params.options.fix ? ["--fix"] : [];
    switch(firstArg) {
        case "tsx":
        case "ts": {
            const configPath = config(tsLintJson);
            statusCode = await Process.run("tslint", ["-t", "codeFrame", ...options, "--config", configPath, ...params.args]);
            break;
        }
        case "scss": {
            const configPath = config(styleLintJson);
            statusCode = await Process.run("stylelint", ["--syntax", "scss", ...options, "--config", configPath, ...params.args]);
            break;
        }
        default: {
            statusCode = 1;
            Logger.error(`linter ${firstArg}`, `cmd does not exist`);
            break;
        }
    }
    if (statusCode === 0) {
        Logger.success(`linter ${firstArg}`, "completed");
    } else {
        Logger.error(`linter ${firstArg}`, `exited with status code ${statusCode}`);
    }
    proc.exit(statusCode);
}

main(process);
