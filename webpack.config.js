const webpack = require('webpack');
const path = require('path');
const config = {
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
      


      // all your loaders will be here.
      // loaders enables you to use all kinds of
      // file types
    ],
  }
}
module.exports = config;