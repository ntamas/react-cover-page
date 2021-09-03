const path = require('path')

module.exports = {
  entry: './examples/basic/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve('./examples/basic'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.resolve('./examples/basic')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      }
    ]
  }
}
