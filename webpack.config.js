const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// plugins
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    stats: 'normal',
    contentBase: path.join(__dirname, 'src'),
    index: 'index.html',
    historyApiFallback: {
      index: '/',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader', CssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  },
  resolve: {
    extensions: ['*', '.tsx', '.jsx', '.js'],
    alias: {
      '@atoms': path.resolve(__dirname, 'src/app/atoms/'),
      '@pages': path.resolve(__dirname, 'src/app/pages/'),
    }
  },
  plugins: [
    new CssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true
    })
  ]
};