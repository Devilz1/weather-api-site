const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let target = 'web';
let isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/app.html',
    }),
];

const styleLoader = [
    {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[folder]__[local]__[hash:base64:5]',
            },
        },
    },
    'postcss-loader',
    'sass-loader',
];

if (isProd) {
    mode = 'production';
    target = 'browserslist';
    plugins.push(new MiniCssExtractPlugin());
    styleLoader.unshift(MiniCssExtractPlugin.loader);
} else {
    plugins.push(new ReactRefreshWebpackPlugin());
    styleLoader.unshift('style-loader');
}

if (!isProd) plugins.push(new MiniCssExtractPlugin());

module.exports = {
    mode,
    target,
    entry: ['@babel/polyfill', './src'],
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        alias: {
            img: path.resolve(__dirname, './src/img'),
            pages: path.resolve(__dirname, './src/pages'),
            components: path.resolve(__dirname, './src/components'),
            containers: path.resolve(__dirname, './src/containers'),
            css: path.resolve(__dirname, './css'),
        },
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    },
                },
            },
            {
                test: /\.s?css$/i,
                use: styleLoader,
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9001,
        open: true,
        hot: true,
    },
};
