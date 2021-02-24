import { merge } from 'webpack-merge';
import common from './webpack.common'
import webpack from "webpack";
import CompressionPlugin from 'compression-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

console.log('\x1b[36m%s\x1b[0m', 'Production'); 

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
    })],
  },
  output: {
    filename: 'assets/js/[name].[chunkhash].bundle.js'
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      compressionOptions: { level: 9 }
    }),
  ]
});


export default config;