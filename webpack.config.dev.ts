import { merge } from 'webpack-merge';
import path from "path";
import common from './webpack.common'
import webpack, { RuleSetRule } from "webpack";

console.log('\x1b[36m%s\x1b[0m', 'Development'); 

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
    publicPath: '/', //relative path to output path where  devserver will look for compiled files,
    historyApiFallback: true,
    compress: true,
    // hot: true
  },
 
  output: {
    filename: 'assets/js/[name].[hash].bundle.js'
  }
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
config!.module!.rules = config?.module?.rules.filter((rule) => rule.test?.toString() != /\.scss$/.toString()) as RuleSetRule[];

config?.module?.rules.push(
  { // config for sass compilation
    test: /\.scss$/,
    exclude: {
      test: ['/node_modules/']
    },
    include: /\.module\.scss$/,
    use: [
      'style-loader',
      '@teamsupercell/typings-for-css-modules-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
      {
        loader: "sass-loader"
      }
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ],
    exclude: /\.module\.scss$/
  },
)


export default config;