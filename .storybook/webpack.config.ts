import path from "path";

module.exports = ({ config }) => {


  config.module.rules.push(
    {
      test: /\.(ts|js)x?$/,
      exclude: [/node_modules/, /__tests__/, /\.test.(tsx|ts)?$/], // need to check
      use: [{
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
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
      ]
    },
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
  );
  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
      'react-redux': require.resolve('react-redux'),
      'src': path.resolve(__dirname, '../src')
    };

  return config;
};

