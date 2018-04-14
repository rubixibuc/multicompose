var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: 'multi-compose',
    libraryTarget: 'umd',
    filename: 'multi-compose.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    lodash: true,
    recompose: true
  }
};
