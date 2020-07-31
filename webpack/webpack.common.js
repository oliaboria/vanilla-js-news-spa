const { join } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_DIST = join(__dirname, '../dist');

const CONFIG = {
    entry: {
        index: './index.js',
    },

    output: {
        path: PATH_DIST,
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].chunk.js',
    },

    resolve: {
        extensions: ['.js', '.css'],
    },

    optimization: {
        splitChunks: {
            name: true,
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\]node_modules[\\/]/,
                },
            },
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};

module.exports = {
    CONFIG,
    PATH_DIST,
};
