const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./base.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        inject: 'body',
        chunksSortMode: 'dependency',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ]
  })
}