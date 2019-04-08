const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/src/components/index.jsx',
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
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: path.join(__dirname, '/client/src/components'),
      },
    ],
  },
};
