const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: [
        './src/js/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Intro to webpack',
            template: './src/index.html',
            hash: true,
        }),
        new CommonsChunkPlugin({
            name: 'main',
            filename: 'main.bundle.js',
        }),
    ],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
};
