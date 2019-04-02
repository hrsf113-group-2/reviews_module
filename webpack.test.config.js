const path = require('path');

module.exports = {
  entry: './client/src/components/test/setupTests.js',
  output: {
    filename: 'mainTest.js',
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
