const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    path.resolve(__dirname, '..', 'src'),
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    public_path: '/lib/',
    filename: 'bundle.js',
  },
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
