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
    assetModuleFilename: '[name][ext]',
    clean: true
  },

  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5001, // default 8080
    open: true,
    hot: true
  },

  // 11:35 (video) webpack by default understands json and javascript
  // We need loaders to understand other types

  // loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|ico|png|webp|jpeg|jpg|gif)$/,
        type: 'asset/resource', // builtin loader webpack5

      }
    ]

  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: "index.html",
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}