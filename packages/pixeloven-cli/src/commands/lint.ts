import { PixelOvenRunContext } from "../types";

/**
 * @todo Spawn doesn't show output :(
 * @todo still need to process exit... think we might just use home backed solution for now.
 */
export default {
    alias: ["--lint", "-l"],
    name: "lint",
    run: async (context: PixelOvenRunContext) => {
        const { parameters, print, pixeloven, styleLint, tsLint } = context;
        let statusCode = {};
        switch (parameters.first) {
            case "scss": {
                const argList = parameters.argv && parameters.argv.length 
                    ? parameters.argv.slice(4)
                    : [];
                statusCode = await styleLint(argList);
                console.log(statusCode);
                if (statusCode) {
                    print.error(`Stylelint exited with status ${statusCode}`);
                } else {
                    print.success(
                        `Success! Your code is beautify just the way it is.`,
                    );
                }
                return statusCode
            }
            case "ts":
            case "tsx": {
                const argList = parameters.argv && parameters.argv.length 
                    ? parameters.argv.slice(4)
                    : [];
                statusCode = await tsLint(argList);
                console.log(statusCode);
                if (statusCode) {
                    print.error(`TSLint exited with status ${statusCode}`);
                } else {
                    print.success(
                        `Success! Your code is beautify just the way it is.`,
                    );
                }
                return statusCode;
            }
            default:
                print.error("Invalid argument provided");
                print.info("Run --help for more details");
        }
        return 1;
    },
};
