/* eslint-disable no-undef */
/* eslint-disable  */
const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const analyzer = require('webpack-bundle-analyzer');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.HTTP_HOST': `"${
                process.env.HTTP_HOST || 'http://localhost:3090'
            }"`
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            baseUrl: '/'
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 1024,
            minRatio: 0.8
        }),
        new CompressionPlugin({
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            threshold: 1024,
            minRatio: 0.8
        }),
        ...(process.env.ANALYZE ? [new analyzer.BundleAnalyzerPlugin()] : [])
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/']
            },
            {
                test: /\.css$/i,
                use: ['thread-loader', 'style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    performance: {
        maxEntrypointSize: 280000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules\/(react|react-dom|react-router-dom|@mui\/material)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};
