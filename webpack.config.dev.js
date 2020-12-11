const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

console.log('\x1b[36m%s\x1b[0m', 'Development'); 

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
    publicPath: '/', //relative path to output path where  devserver will look for compiled files,
    // hot: true
  },
});