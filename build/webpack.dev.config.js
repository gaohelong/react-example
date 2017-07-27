/* require */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

/* 将css提取成单独文件 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractGlobalSass = new ExtractTextPlugin({
    // filename: "assets/css/global.[contenthash].css", // 输出到assets/css/目录下.
    filename: "assets/css/[name].[contenthash].css", // 输出到assets/css/目录下.
    // disable: process.env.NODE_ENV === "development" // true: 禁用，这是css在当前页面的<style></style>中. 如果为false: 启用，则单独生成css文件. 默认为false.
});

const extractSass = new ExtractTextPlugin({
    // filename: "assets/css/[name].[contenthash].css", // 输出到assets/css/目录下.
    filename: "assets/css/[name].[contenthash].css", // 输出到assets/css/目录下.
    // disable: process.env.NODE_ENV === "development" // true: 禁用，这是css在当前页面的<style></style>中. 如果为false: 启用，则单独生成css文件. 默认为false.
});

const extractCss = new ExtractTextPlugin({
    // filename: "assets/css/[contenthash].css", // 输出到assets/css/目录下.
    filename: "assets/css/[name].contenthash].css", // 输出到assets/css/目录下.
    // disable: process.env.NODE_ENV === "development" // true: 禁用，这是css在当前页面的<style></style>中. 如果为false: 启用，则单独生成css文件. 默认为false.
});

// DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
var definePluginConfig = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    },
    '__PROD__': JSON.stringify('dev')
});

module.exports = function(env) {
    // publicPath
    var publicPath = (env == 'dev') ? 'http://hl.react.com/' : 'http://localhost:8080/';

    /* return */
    return {
        /* entry */
        entry: {
            main: ['whatwg-fetch', './src/main.jsx'],
        },

        /* 输出 */
        output: {
            // filename: 'bundle.js',
            filename: 'assets/js/[name].[chunkhash].js', // 输出到assets/js/目录下
            path: path.resolve(__dirname, '../dist'), // 输出路径

            /* 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项 */
            /* 如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。 */
            publicPath: publicPath // 一般都设置一个url否则去掉这项.
        },

        /* webpack-dev-server */
        devServer: {
            contentBase: path.join(__dirname, "../dist"),
            compress: true,
            port: 8080
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
                // css.
                {
                    test: /\.css$/,
                    use: extractCss.extract({
                        use: [
                            {
                                loader: 'css-loader?sourceMap',
                                // options:{
                                //     minimize: true // css压缩
                                // }
                            },
                            {loader: 'postcss-loader'},
                        ],
                        // 在开发环境使用 style-loader
                        fallback: "style-loader"
                    })
                },

                // main sass.
                {
                    test: /main\.scss$/,
                    use: extractGlobalSass.extract({
                        use: [
                            {
                                loader: "css-loader?sourceMap",
                                // options:{
                                //     minimize: true // css压缩
                                // }
                            },
                            // {loader: "resolve-url-loader"}, // 放在此处是转换css中的路径为绝对路径.
                            // {loader: "sass-loader"}
                            {loader: "sass-loader?sourceMap&includePaths[]=" + path.resolve(__dirname, "../node_modules/compass-mixins/lib")}
                        ],
                        // 在开发环境使用 style-loader
                        fallback: "style-loader"
                    })
                },

                // sass.
                {
                    test: /[^main]\.scss$/,
                    use: extractSass.extract({
                        use: [
                            {
                                loader: "css-loader?sourceMap",
                                // options:{
                                //     minimize: true // css压缩
                                // }
                            },
                            // {loader: "resolve-url-loader"}, // 放在此处是转换css中的路径为绝对路径.
                            // {loader: "sass-loader"}
                            {loader: "sass-loader?sourceMap&includePaths[]=" + path.resolve(__dirname, "../node_modules/compass-mixins/lib")}
                        ],
                        // 在开发环境使用 style-loader
                        fallback: "style-loader"
                    })
                },

                // svg.
                {
                    test: /\.svg$/,
                    use: [
                        /* 小于10240byte(10kb)时返回data url否则返回url, 返回data url时不会生成对应的文件. */
                        // {loader: 'svg-url-loader?limit=10240&name=assets/images/[hash].[name].[ext]'}
                        // {loader: 'svg-url-loader?limit=10240&name=assets/images/[hash].[name].[ext]'}
                        // {loader: 'svg-url-loader?limit=1&name=assets/images/[hash].[name].[ext]'}
                        {loader: 'svg-url-loader?limit=1&name=assets/images/[hash].[ext]'}
                    ]
                },

                // file-loader(将项目目录下assets/images/的目录结构及文件拷贝到输出目录下)
                {
                    test: /\.(jpe?g|png|gif)(\?v=\d+\.\d+\.\d+)?$/,

                    /* 不设置publicPath时默认使用output中的publicPath */
                    // use:  "file-loader?name=[hash].[name].[ext]&publicPath=assets/images/&outputPath=assets/images/"
                    // use:  "file-loader?name=[hash].[name].[ext]&publicPath=http://hl.webpack-office-case.com/&outputPath=assets/images/"
                    // use:  "file-loader?name=[hash].[name].[ext]&outputPath=assets/images/"
                    use:  "file-loader?name=[hash].[ext]&outputPath=assets/images/"
                },

                // woff、fft、eot、svg
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/font-woff&outputPath=assets/font/'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/octet-stream&outputPath=assets/font/'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: 'file-loader?outputPath=assets/font/'
                },
                // {
                //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                //     use: 'url-loader?limit=10000&mimetype=image/svg+xml' // 将小于10kb的svg转换成data url
                // }

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
            // source map(方便排查、定位javascript问题)
            new webpack.SourceMapDevToolPlugin({
                filename: 'map/[name].js.map', // 输出到map目录下
                exclude: ['vendor.js'] // 排除vendor.js
            }),

            // DefinePlugin 允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
            definePluginConfig,

            // 提取成单独的css文件.
            extractGlobalSass,
            extractSass,
            extractCss,

            // 生成html.
            new HtmlWebpackPlugin({
                title: 'react + webpack',
                template: './src/template/app.html',
            }),
        ]
    }
};
