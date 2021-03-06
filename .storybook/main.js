const path = require('path')
const cssVars = (path.resolve(__dirname, '../source/styles/var.scss')).replace(/\\/g, '/');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader','css-loader',{
        loader: 'sass-loader',
        options: {
          additionalData: `@import "${cssVars}";`,
        },
      }],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.css$/,
      use: 'style-loader!css-loader',
      include: __dirname
    });

    // Return the altered config
    return config;
  },
}