/* ----------------------------------------
 * import modules
 *
 * webpack.config.js is in Common JS syntax:
 * const module = require("from");
 * ----------------------------------------
 */

// enable the Node file system full path lookup (for path.resolve)
const path = require("path");

// refer the webpack module (for tinkering)
const { web, webpack } = require("webpack");

// import module
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import module
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// import module
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// import module
const TerserPlugin = require("terser-webpack-plugin");

// change buildMode to the type of build, manually
// set mode between "development" | "production" | "none"
const buildMode = "development";


/* ----------------------------------------
 * module exports a configuration object
 * ----------------------------------------
 */

module.exports = {
    mode: buildMode,
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        assetModuleFilename: "images/[name][ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader", "astroturf/loader"
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // if true use "style-loader", if false use "MiniCssExtractPlugin.loader"
                    buildMode !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                dependency: { not: ['url'] },
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimize: true, 
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            minify: {
                collapseWhitespace: false,
                removeComments: true,
            },
            meta: {
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
                "description": "A description of the page",
                "robots": "index, follow",
                "googlebot": "index, follow",
                "google": "nositelinkssearchbox",
                "googlebot-news": "noindex",
                "robots": "max-snippet:-1",
                "geo.region": "CL",
            },
            title: "project name",
            filename: "index.html",
            template: "src/htmltemplates/templateindex.html",
            favicon: "src/images/favicon/ye-icon.png"
        }),
    ].concat(buildMode !== "production" ? [] : [new MiniCssExtractPlugin()]),
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 8080,
        // use hot: false if devServer does not auto-reload
        hot: false,
        compress: true,
        historyApiFallback: true,
        allowedHosts: ["localhost"],
    },
    target: "web"
}