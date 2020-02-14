const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loaders: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /.(jpg|jpeg|png|svg|gif|woff|woff2|eot|ttf)$/,
            loaders: [
              'url-loader'
            ]
          }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify("production")
        },
      }),
      new UglifyJsPlugin()
    ]
  }