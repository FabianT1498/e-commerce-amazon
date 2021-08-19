const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')

const common =  require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './src/index'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
});
