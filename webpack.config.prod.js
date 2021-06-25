const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const common =  require('./webpack.common');

const baseHTML = require('./src/index.html')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      templateContent: baseHTML
    })
  ],
})
