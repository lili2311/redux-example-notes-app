var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: [
        './src/js/main.js',
        './src/scss/styles.scss'
        ],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
        loaders: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
              },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };