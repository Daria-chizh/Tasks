/* eslint-env node */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: argv.mode === 'development' ? '/' : '/Tasks',
  },
  entry: [
    './js/app.js',
    './css/style.css',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'linkTag' },
          },
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(png|ico)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './img/favicon.ico',
    }),
  ],
});
