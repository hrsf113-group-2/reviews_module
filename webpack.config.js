const path = require('path');

/*Webpack explanation
  entry: which file/files you want to bundle into our main.js
  output: the bundle file location and name (main.js)
  resolve: which files you want to actually bundle?
  rules:
    modules


*/

module.exports = {
  entry: './client/src/',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/, //just for jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // what we want to actually do with the specified files?
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      } 
    ]
  }
};