# rwb-project-setup
Project Setup for React webapp, with Webpack & Babel (RWB)

React (18 (17)) + Webpack + Babel ( + Sass/PostCSS + Astroturf), instead of using the create-react-app or vite

Uses the conditional build at the webpack.config.js\
module.exports = { mode: buildMode, ... }

At buildMode: "development" will build with ["style-loader", "css-loader", "postcss-loader", "sass-loader",] (injects the css into the js)\
At buildMode: "production" will build with [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",] (creates the css files)

Steps for building this: [Project Log](../main/project-notes/project-log.txt)\
Which dependencies: [package.json](../main/package.json)
