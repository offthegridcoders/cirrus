/*
  Webpack Config

  Webpack config is a POJO (Plain Ol' Javascript 
  Object) that defines the transpilation of our 
  app into browser-optimized files.
*/

// Dependencies
var path = require('path');
var webpack = require('webpack');

// Webpack Config
module.exports = {
  entry: './src/' + appToBuild + '/index.js',
  vendors: [
    'react'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') }
    ]
  },
};