var path = require('path')
// var webpack = require('webpack')
module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: 'cover 99.5%',
                modules: 'commonjs'
              }
            ]
          ]
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
