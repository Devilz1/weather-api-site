const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let mode = "development";
let isProd = process.env.NODE_ENV === 'production';

if (isProd) mode = 'production';

module.exports = {
    mode,
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[folder]__[local]__[hash:base64:5]",
                            },
                        },
                    },
                    "postcss-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
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
}
