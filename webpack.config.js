const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //'production'
  entry: {
    main: path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // main
    clean: true
  },

  // 11:35 (video) webpack by default understands json and javascript
  // We need loaders to understand other types

  // loaders
  module: {

  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: "index.html",
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}