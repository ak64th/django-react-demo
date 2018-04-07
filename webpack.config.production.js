/* eslint-env node */
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'client/src');
const OUTPUT_DIR = path.resolve(__dirname, 'client/dist/blog');


const defaultInclude = [SRC_DIR];

const config = {
    context: __dirname,
    target: 'web',
    entry: `${SRC_DIR}/index.js`,
    output: {
        path: OUTPUT_DIR,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
                include: defaultInclude
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {importLoaders: 1}
                        },
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}
                    ]
                }),
                include: defaultInclude
            },
            {
                test: /\.jsx?$/,
                use: [{loader: 'babel-loader'}],
                include: defaultInclude
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ],
                include: defaultInclude
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css', {allChunks: true}),
        new BundleTracker({filename: './webpack-stats-prod.json'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MinifyPlugin()
    ],
};

module.exports = config;
