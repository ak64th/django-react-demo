/* eslint-env node */
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client/src');
const OUTPUT_DIR = path.resolve(__dirname, '.tmp/bundles');

const defaultInclude = [SRC_DIR];

const config = {
    context: __dirname,
    target: 'web',
    entry: `${SRC_DIR}/index.js`,
    output: {
        path: OUTPUT_DIR,
        filename: '[name].[hash].js',
        publicPath: 'http://127.0.0.1:8080/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
                include: defaultInclude
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
                include: defaultInclude
            },
            {
                test: /\.jsx?$/,
                use: [{loader: 'babel-loader'}],
                include: defaultInclude
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'}],
                include: defaultInclude
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}],
            }
        ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: OUTPUT_DIR,
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
    },
};

module.exports = config;
