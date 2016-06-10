/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var path = require('path');
var webpack = require('webpack');

var appModulesPath = path.join(__dirname, 'src/scripts');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
      'webpack/hot/only-dev-server',
      './src/scripts/components/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': '../../../src/styles',
      'components': '../../../src/scripts/components/',
      'stores': '../../../src/scripts/stores/',
      'actions': '../../../src/scripts/actions/',
      style: '../../styles/main.less'
    },
    fallback: [ 'node_modules/material-design-icons' ]
  },
  module: {
    // preLoaders: [{
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'jsxhint?babel-experimental&babel&harmony'
    // }],
    loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel-loader?optional=es7.classProperties&stage=0'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.less$/, loader: "style!css!less"},
        // {test: /\.es6$/, loader: 'es6-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
