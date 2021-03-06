import { getKeys } from "@pixeloven-core/common";
import * as Validation from "@pixeloven-core/validation";
import { PixelOvenToolbox } from "../types";

enum ProjectType {
    New,
    Existing,
}
type ProjectStrings = keyof typeof ProjectType;

interface ProjectOptions {
    projectType: ProjectStrings;
}

enum PackageManager {
    NPM,
    Yarn,
}
type PackageManagerStrings = keyof typeof PackageManager;

interface NewProjectOptions {
    projectName: string;
    projectAuthor: string;
    projectDescription: string;
    projectPackageManager: PackageManagerStrings;
}

export default {
    description: "PixelOven initializer",
    name: "init",
    run: async (toolbox: PixelOvenToolbox) => {
        const { prompt, print, system, template } = toolbox;

        /**
         * Wrapper for all the generators
         * @param props
         */
        async function generate(props: NewProjectOptions) {
            const { projectName } = props;
            const locationName = projectName.toLowerCase();
            await template.generate({
                props,
                target: `${locationName}/apps/.gitkeep`,
                template: "project/gitkeep.ejs",
            });
            await template.generate({
                props,
                target: `${locationName}/packages/.gitkeep`,
                template: "project/gitkeep.ejs",
            });
            await template.generate({
                props,
                target: `${locationName}/lerna.json`,
                template: "project/lerna.json.ejs",
            });
            await template.generate({
                props,
                target: `${locationName}/package.json`,
                template: "project/package.json.ejs",
            });
            await template.generate({
                props,
                target: `${locationName}/tsconfig.json`,
                template: "project/tsconfig.json.ejs",
            });
            if (props.projectPackageManager === "Yarn") {
                await system.spawn(`yarn --cwd ${locationName} install`, {
                    detached: true,
                    stdio: "inherit",
                });
            } else {
                await system.spawn(`npm --prefix ${locationName} install`, {
                    detached: true,
                    stdio: "inherit",
                });
            }
        }

        const askProjectQuestions = [
            {
                choices: getKeys(ProjectType),
                message: "Is this a new or existing project?",
                name: "projectType",
                type: "select",
            },
        ];

        const askNewProjectQuestions = [
            {
                choices: getKeys(PackageManager),
                message: `Which package manager do you prefer?`,
                name: "projectPackageManager",
                suggest: PackageManager.Yarn,
                type: "select",
            },
            {
                message: "What should this project be called?",
                name: "projectName",
                type: "input",
                validate: Validation.isAWord,
            },
            {
                message: "What is the author's name?",
                name: "projectAuthor",
                type: "input",
                validate: Validation.minLength(1),
            },
            {
                message: "Please provide a short description of this project.",
                name: "projectDescription",
                type: "input",
                validate: Validation.minLength(1),
            },
        ];

        let statusCode = 0;
        try {
            const { projectType } = await prompt.ask<ProjectOptions>(
                askProjectQuestions,
            );
            switch (projectType) {
                case "Existing": {
                    print.info(
                        "Please review our getting started section for existing projects https://www.pixeloven.com/docs/getting-started/intro",
                    );
                    break;
                }
                case "New": {
                    const props = await prompt.ask<NewProjectOptions>(
                        askNewProjectQuestions,
                    );
                    await generate(props);
                    print.info(
                        `Next try "yarn generate" to start your first application or package.`,
                    );
                    break;
                }
            }
        } catch (err) {
            print.error(err.message);
            statusCode = 1;
        }
        process.exit(statusCode);
    },
};
