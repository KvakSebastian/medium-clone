const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/js/index.js','./src/css/style.css','./src/css/art.css'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'articles.html',
            template: './src/articles.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'article.html',
          template: './src/article.html'
      }),
        new HtmlWebpackPlugin({
          filename: 'create-article.html',
          template: './src/create-article.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
          })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../css',
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
            ]
          }
        ]
    }
};