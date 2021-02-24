import path from "path";
import { merge } from 'webpack-merge';
import productionConfig from './webpack.config.prod'
import webpack from "webpack";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

console.log('\x1b[36m%s\x1b[0m', 'SERVER SIDE RENDERING'); 

const config: webpack.Configuration = merge(productionConfig, {
  entry: {
    main: './server/Server.tsx',
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/server'),
  },
  // performance: {
  //     hints: false,
  // },
  target: 'node',
  optimization: {
  },
});

config!.optimization!.splitChunks = undefined;

config!.plugins!.push(
  new CleanWebpackPlugin()
)

export default config;