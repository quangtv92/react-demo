
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
  template: "./src/index.html",
  filename: "./index.html"
});

const rootDir = path.resolve(__dirname, './')

module.exports = {
  watch: true,
  output: {
    path: path.join(rootDir, 'build/assets'),
    publicPath: '/assets/',
    filename: 'js/[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [ 'env', {
                target: {
                  browser: [ 'last 2 versions', 'safari >= 7' ]
                }
              } ],
              'react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
};