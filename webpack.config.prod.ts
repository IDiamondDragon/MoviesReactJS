import { merge } from 'webpack-merge';
import common from './webpack.common'
import webpack from "webpack";

console.log('\x1b[36m%s\x1b[0m', 'Production'); 

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  output: {
    filename: 'assets/js/[name].[chunkhash].bundle.js'
  }
});


export default config;