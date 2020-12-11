const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

console.log('\x1b[36m%s\x1b[0m', 'Production'); 

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
});