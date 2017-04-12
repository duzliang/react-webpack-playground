const path = require('path');

const publicPath = path.resolve(__dirname, 'dist');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
  return {
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, '../dist'),
      // publicPath: publicPath,
      sourceMapFilename: '[name].map',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.join(__dirname, 'app'), 'node_modules'],
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['to-string-loader', 'css-loader'],
        }),
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      }],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // Specify the common bundle's name
        minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        },
      }),
      //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      }),
      new ExtractTextPlugin('app.css'),

      new HtmlWebpackPlugin({
        template: 'index.html',
        chunksSortMode: 'dependency',
      }),
    ],
  }
}