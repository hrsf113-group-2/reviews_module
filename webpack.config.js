const path = require('path');

module.exports = {
  entry: './client/src/components/App.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
};
