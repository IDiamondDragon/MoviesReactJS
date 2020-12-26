import { merge } from 'webpack-merge';
import path from "path";
import common from './webpack.common'
import webpack from "webpack";

console.log('\x1b[36m%s\x1b[0m', 'Development'); 

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
    publicPath: '/', //relative path to output path where  devserver will look for compiled files,
    compress: true,
    // hot: true
  },
});

export default config;