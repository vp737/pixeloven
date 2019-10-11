import { AddonGeneratorsToolbox, CreateComponentOptions } from "../types";

/**
 * @todo can we use any of this https://github.com/glenjamin/ultimate-hot-reloading-example
 * @todo bring this back https://github.com/gaearon/react-hot-loader
 * @todo FIX client onDone runs twice which means we are compile an extra time :(
 * @todo 1) Create CLI options for --open (auto-open)
 * @todo 2) Create CLI options for --choose-port (auto-choose-port)
 * @todo 3) Create CLI options for --machine (host|docker|virtual)
 *
 * @todo 4) Make logging to json would be nice
 *
 * @todo Make build and dev-server configurable through CLI.
 */
export default (toolbox: AddonGeneratorsToolbox) => {
    const createComponent = async (options: CreateComponentOptions) => {
        const {
            componentAtomicType,
            componentDescription,
            componentParadigmType,
            componentName,
            componentHasState,
            componentHasStyle,
        } = options;
        const { strings, template } = toolbox;
        const className = `${strings.lowerCase(componentAtomicType.charAt(0))}-${strings.kebabCase(componentName)}`;
        const name = `${strings.pascalCase(componentName)}`;
        const props = {
            atomicType: componentAtomicType,
            camelName: strings.camelCase(name),
            className,
            description: componentDescription,
            hasState: componentHasState,
            hasStyle: componentHasStyle,
            name,
        };
        const atomicType = strings.pluralize(
            strings.lowerCase(componentAtomicType),
        );
        const paradigmType = strings.lowerCase(componentParadigmType);
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/${name}.tsx`,
            template: `component/${paradigmType}.Component.tsx.ejs`,
        });
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/${name}.scss`,
            template: `component/Component.scss.ejs`,
        });
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/${name}.stories.tsx`,
            template: `component/Component.stories.tsx.ejs`,
        });
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/${name}.test.tsx`,
            template: `component/Component.test.tsx.ejs`,
        });
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/index.ts`,
            template: `component/index.ts.ejs`,
        });
        template.generate({
            props,
            target: `src/shared/components/${atomicType}/${name}/README.md`,
            template: `component/README.md.ejs`,
        });
    };
    /**
     * @todo namespace this a little better... like .create .modify etc
     */
    toolbox.createComponent = createComponent;
};
