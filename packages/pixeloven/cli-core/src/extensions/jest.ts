import { resolvePath } from "@pixeloven-core/filesystem";
import { PixelOvenCoreToolbox } from "../types";

const fileName = "jest.json";

/**
 * @todo Can we import and use jest as a library instead of running it's CLI?
 */
export default (context: PixelOvenCoreToolbox) => {
    async function jest(args: string[]) {
        const { print, pixelOven } = context;
        const configPath = resolvePath(fileName, false);
        const cmd = ["jest"];
        if (configPath) {
            return pixelOven.run(
                cmd.concat(["--config", configPath]).concat(args),
            );
        } else {
            // @todo because this always resolves path it will never reach this
            print.warning(
                `Unable to find "${fileName}" reverting to default configuration`,
            );
        }
        const results = pixelOven.run(cmd.concat(args));
        return results;
    }
    context.jest = jest;
};
