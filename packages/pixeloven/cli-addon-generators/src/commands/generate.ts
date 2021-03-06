/**
 * @todo Remove as any once https://github.com/infinitered/gluegun/pull/564 is merged
 */
/* tslint:disable no-any */
import { getKeys } from "@pixeloven-core/common";
import * as Validation from "@pixeloven-core/validation";
import {
    AddonGeneratorsToolbox,
    AtomicDesignType,
    CreateAppOptions,
    CreateComponentOptions,
    CreateOptions,
    CreatePackageOptions,
    GeneratorType,
    ProgrammingParadigm,
} from "../types";

/**
 * @todo Might need to do some work for this to support the new proposed project layout...
 * @url https://github.com/SBoudrias/Inquirer.js/
 */
export default {
    description: "File generator addon",
    name: "generate",
    run: async (toolbox: AddonGeneratorsToolbox) => {
        let statusCode = 0;
        const {
            createApp,
            createComponent,
            createPackage,
            parameters,
            print,
            prompt,
        } = toolbox;
        let type = parameters.first || "";

        /**
         * Starting generator type
         * @todo create CLI Addon, library, project generators
         */
        const askCreateQuestions = [
            {
                choices: getKeys(GeneratorType),
                message: "What would you like to generate?",
                name: "generatorType",
                type: "select",
            },
        ];

        /**
         * Acceptable atomic types
         *
         * @todo Ask for locationTypes
         *          Root (./src/components)
         *          App (./apps/{app}/src/components)
         *          Package (./package/{package}/src/components)
         *      Then if App or Package we need to search the first level dir an have them pick one
         * @todo The store one is only going to support root for now. It's not as widely used since the pattern isn't as well established.
         *
         */
        const askCreateComponentQuestions = [
            {
                choices: getKeys(AtomicDesignType),
                message: `What "type" of Atomic component is this?`,
                name: "componentAtomicType",
                type: "select",
            },
            {
                choices: getKeys(ProgrammingParadigm),
                message: "Is this a functional or classical component?",
                name: "componentParadigmType",
                type: "select",
            },
            {
                default: true,
                message: "Will this component need to manage state? (Y/N)",
                name: "componentHasState",
                type: "confirm",
            },
            {
                default: true,
                message: "Will this component require a stylesheet? (Y/N)",
                name: "componentHasStyle",
                type: "confirm",
            },
            {
                message: "What is the name of the new component?",
                name: "componentName",
                type: "input",
                validate: Validation.isAWord,
            },
            {
                message: "Provide a brief description of this component:",
                name: "componentDescription",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message:
                    "Provide a component namespace if necessary (leave blank if not required):",
                name: "componentNameSpace",
                type: "input",
            },
        ];
        const askCreatePackageQuestions = [
            {
                message: "What is the name of the new package?",
                name: "packageName",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message:
                    "Provide a package namespace if necessary (leave blank if not required):",
                name: "packageNameSpace",
                type: "input",
            },
            {
                message: "Provide a brief description of the package:",
                name: "packageDescription",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide a license type for the package:",
                name: "packageLicense",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide the author name:",
                name: "packageAuthorName",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide the author email:",
                name: "packageAuthorEmail",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message:
                    "Provide a private registery if necessary(leave blank if not required):",
                name: "packageRegistry",
                type: "input",
            },
            {
                message:
                    "Provide an initial version to publish the package with:",
                name: "packageVersion",
                type: "input",
                validate: Validation.minLength(1),
            },
        ];
        const askCreateAppQuestions = [
            {
                message: "What is the name of the new app?",
                name: "appName",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message:
                    "Provide a app namespace if necessary (leave blank if not required):",
                name: "appNameSpace",
                type: "input",
            },
            {
                message: "Provide a brief description of the app:",
                name: "appDescription",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide a license type for the app:",
                name: "appLicense",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide the author name:",
                name: "appAuthorName",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Provide the author email:",
                name: "appAuthorEmail",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message:
                    "Provide a private registery if necessary(leave blank if not required):",
                name: "appRegistry",
                type: "input",
            },
            {
                message: "Provide an initial version to publish the app with:",
                name: "appVersion",
                type: "input",
                validate: Validation.minLength(1),
            },
        ];

        if (!type) {
            const { generatorType } = (await prompt.ask<CreateOptions>(
                askCreateQuestions,
            )) as any;
            type = generatorType;
        }

        switch (type.toLowerCase()) {
            case "app": {
                const options = (await prompt.ask<CreateAppOptions>(
                    askCreateAppQuestions,
                )) as any;
                createApp(options);
                break;
            }
            case "component": {
                const options = (await prompt.ask<CreateComponentOptions>(
                    askCreateComponentQuestions,
                )) as any;
                createComponent(options);
                break;
            }
            case "package": {
                const options = (await prompt.ask<CreatePackageOptions>(
                    askCreatePackageQuestions,
                )) as any;
                createPackage(options);
                break;
            }
            default: {
                print.error(`Invalid argument provided`);
                statusCode = 1;
                break;
            }
        }
        process.exit(statusCode);
    },
};
