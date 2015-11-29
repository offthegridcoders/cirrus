/*
  Webpack Config

  Webpack config is a POJO (Plain Ol' Javascript 
  Object) that defines the transpilation of our 
  app into browser-optimized files.
*/

// Dependencies
var path = require('path');
var webpack = require('webpack');

// Webpack Config for web
module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/web/index',
    'webpack-dev-server/client?http://localhost:3000'
  ],
  devtool: 'source-map',
  output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/static/',
      filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: "style!css!autoprefixer" 
      },
      { 
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
    ]
  }
};