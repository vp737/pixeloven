/**
 * Declare file formats not covered by typescript automatically
 */
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.md";

/**
 * Declare packages not explicitly defined
 * @description Consult DefinitelyTyped before declaring below
 * http://definitelytyped.org/
 */
// declare module "@storybook/addon-actions";
// declare module "@storybook/addon-backgrounds";
// declare module "@storybook/addon-knobs";
// declare module "@storybook/addon-options";
declare module "storybook-readme";
declare module "tsconfig-paths-webpack-plugin";
