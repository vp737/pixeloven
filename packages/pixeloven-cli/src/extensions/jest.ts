import { PixelOvenRunContext } from "../types";

export type JestExtension = (args?: string[]) => Promise<object>;

export default (context: PixelOvenRunContext) => {
    const jest = async (args: string[] = []) => {
        const { pixeloven, print } = context;
        const fileName = "jest.json";
        const configPath = pixeloven.getConfigPath(fileName);
        if (configPath) {
            print.info(`Configuration file found ${configPath}`);
            return pixeloven.run(
                [
                    "jest",
                    "--maxWorkers",
                    "2",
                    "--config",
                    configPath,
                    "--env=jsdom",
                ].concat(args),
            );
        } else {
            print.warning(
                `Unable to find "${fileName}" reverting to default configuration`,
            );
            return pixeloven.run(
                ["jest", "--maxWorkers", "2", "--env=jsdom"].concat(args),
            );
        }
    };
    context.jest = jest;
};
