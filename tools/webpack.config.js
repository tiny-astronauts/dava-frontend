const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '..', 'src'),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    publicPath: '/lib/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css)$/,
        loader: 'style!css!sass',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader:'json-loader',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        include: path.resolve(__dirname, 'client/images'),
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
