var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

// 将css提取成单独文件.
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "/assets/css/[name].[contenthash].css",
    // disable: process.env.NODE_ENV === "development" // true: 禁用，这是css在当前页面的<style></style>中. 如果为false: 启用，则单独生成css文件. 默认为false.
});

module.exports = { 
    /* entry */
    entry: {
        main: ['./src/main.jsx'],
    },

    /* output */
    output: {
        // filename: 'bundle.js',
        filename: 'assets/js/[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },

    /* 设置模块如何解析 */
    resolve:  { 
        /* 自动解析确定的扩展。默认值为：extensions: [".js", ".json"] */
        extensions: [".js", ".jsx", ".json", ".scss", ".css"] // 在js中不用写前面所列出的文件后缀, 例如：1.scss就可以去掉.scss了.
    },

    /* 外部扩展(防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。) */
    externals: {
        // jquery: 'jQuery'
    },

    /* loader */
    module: {
        rules: [
            // sass.
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options:{
                                minimize: true // css压缩
                            }
                        },
                        // {loader: "sass-loader"}
                        {loader: "sass-loader?includePaths[]=" + path.resolve(__dirname, "../node_modules/compass-mixins/lib")}
                    ],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            },

            // js.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // jsx.
            {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                use: [
                    {loader: 'jsx-loader'},
                    {loader: 'babel-loader'}
                ]
            }
        ]
    },

    /* 插件配置 */
    plugins: [
        // js压缩.
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 提取成单独的css文件.
        extractSass,

        // 生成html.
        new HtmlWebpackPlugin({
            title: 'react + webpack',
            template: './src/views/app.html',
        }),
    ]
};
