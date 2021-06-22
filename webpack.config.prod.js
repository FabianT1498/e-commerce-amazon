const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require('webpack-merge');
const common =  require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    })
  ],
})
