const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(__dirname, '..', 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '..', '/dist/'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  resolve: {
    root: [
      path.resolve('./src'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'server/app.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
          ],
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
}
