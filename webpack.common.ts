import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from "webpack";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config: webpack.Configuration = {
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    // filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist/client'), // base path where to send compiled assets
    publicPath: '/' // base path where referenced files will be look for
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'src': path.resolve(__dirname, 'src') // shortcut to reference src folder from anywhere
    }
  },
  module: {
    rules: [
      // config for tsx
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/, /__tests__/, /\.test.(tsx|ts)?$/], // need to check
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["transform-class-properties"]
          },
        },
      },
      { // config for sass compilation
        test: /\.scss$/,
        exclude: {
          test: ['/node_modules/']
        },
        include: /\.module\.scss$/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                // compileType: "module",
                // mode: "local",
                // auto: true,
                // exportGlobals: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                // localIdentContext: path.resolve(__dirname, "src"),
                // localIdentHashPrefix: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "camelCase",
                //exportOnlyLocals: true,
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
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ],
        exclude: /\.module\.scss$/
      },
      { // config for images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            }
          }
        ],
      },
      { // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            }
          }
        ],
      },
      // { // maybe remove in future
      //   test: /\.(csv|tsv)$/,
      //   use: ["csv-loader"]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["assets/*.*"]
    }),
    new HtmlWebpackPlugin({ // plugin for inserting scripts automatically into html
      template: "./src/index.html",
      filename: "index.html",
      title: "Movies",
      excludeChunks: [ 'main' ]
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new MiniCssExtractPlugin({ // plugin for controlling how compiled css will be outputted and named
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[id].css"
    })
  ]
};

export default config;