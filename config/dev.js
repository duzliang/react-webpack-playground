const path = require('path');

const webpackMerge = require('webpack-merge');

const commonConfig = require('./base.js');

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    devServer: {
      port: 9999,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
    },
  });
}
