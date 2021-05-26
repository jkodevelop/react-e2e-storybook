const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const indexHtmlName = 'index.html';
const mainJSName = 'index.js';

module.exports = {
  // starting point
  entry: { index: path.resolve(__dirname, 'source', mainJSName) }, //look in source/index.js instead of default src/index.js
  // output point 
  output: {
    path: path.resolve(__dirname, 'build'), // instead of default "dist" now use "build" as output folder
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 9001
  },
  plugins: [
    // setting up a basic html file for entry for web-app
    // 1) loads our HTML files
    // 2) injects the bundle(s) in the same file
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'source', indexHtmlName)
    }),
    new StylelintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc.json'),
      fix: false
    }),
    // this allows you to extract the style into it's own file
    // effective replacing style-loader (which injects the css code directly into the html)
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  module: {
    // right to left
    // 1. sass-loader transpile scss/sass into css
    // 2. css-loader allows webpack to understand `import "./style.css";`
    // 3. style-loader is for injecting style into the html
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "./source/styles/var.scss";',
          },
        }] // order matters here
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, './node_modules/')
        ],
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
};