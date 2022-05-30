const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (_, argv) => ({
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './static/index.html'),
            favicon: path.resolve(__dirname, './static/favicon.ico'),
            hash: true,
        }),
        new StyleLintPlugin({
            configFile: path.resolve(__dirname, 'stylelint.config.js'),
            files: '**/*.css',
            failOnError: false,
            quiet: false,
        }),
    ],
});
