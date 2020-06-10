const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve('../public'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.join(__dirname, '/src/'),
        use: require.resolve('babel-loader'),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: require.resolve('html-loader'),
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [require.resolve('style-loader'), require.resolve('css-loader')],
      },
      {
        test: /\.svg/,
        use: {
          loader: require.resolve('svg-url-loader'),
          options: {},
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
