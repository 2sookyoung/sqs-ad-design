/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require("path");
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@assets": path.resolve(__dirname, "../src/assets"),
    };
    return config;
  },
};
export default config;
