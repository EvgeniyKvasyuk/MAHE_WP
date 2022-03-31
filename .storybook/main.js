const path = require('path');



module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-postcss',
      loader: require.resolve('postcss-loader'),
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            ident: 'postcss',
            config: path.resolve(__dirname, '../config/postcss.config.js'),
          },
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  features: {
    emotionAlias: false,
  },
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@common': path.resolve(__dirname, "../src/common"),
      '@modules': path.resolve(__dirname, "../src/modules"),
      '@components': path.resolve(__dirname, "../src/components"),
      '@assets': path.resolve(__dirname, "../src/assets"),
    };

    return config;
  }
}
