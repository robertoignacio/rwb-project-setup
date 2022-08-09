# rwb-project-setup
Project Setup for a React webapp, with Webpack & Babel (RWB)

My current local dev env: WSL2 Debian 11 instance, using Node 18 (18.7) with VSCode.

### Project abstract
React (18 (17)) + Webpack 5 + Babel 7 ( + Sass/PostCSS + Astroturf ), instead of using the create-react-app or vite.\
Aiming to build a dev env for CSS-in-JS with webpack dev server.

### Concept
Main culprits of slow build times were 
Uses a manual conditional build at the webpack.config.js, changing the value of the webpack.config.js --> module.exports = { mode: buildMode, ... }
Change the value of buildMode to "development" or "production"
(Not using process.env.NODE_ENV)
- At buildMode: "development" will build with ["style-loader", "css-loader", "postcss-loader", "sass-loader",] (injects the css into the js)\
- At buildMode: "production" will build with [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",] (creates the css files)

I included cache options to run the localhost dev server with the development build so it has short build times per auto-refresh.\
mode: "development" ---> $ npm run build ---> keep the /dist dir ---> $ npm run dev

Also this setup includes the SpeedMeasurePlugin

        Current build times:
            development: 3.85 secs
            dev server: 232 ms

            production: 7.48 secs

        Culprits:
            1. TerserPlugin ---> issue solved out of development mode
            2. Sass loader chain ---> added cache and options        


### WSL2 "disconnected" from VSCode
If the WSL instance gets disconnected from the VSCode remote it tends to be from reaching the max allocated RAM (limit).
Shut the wsl down at a PowerShell terminal with wsl --shutdown, then increase the RAM and/or swap at the .wslconfig (global) file. 
(Draws memory from Docker instances too).

### My notes, and dependencies
- Steps for building this: [Project Log](../main/project-notes/project-log.txt)
- Which dependencies: [package.json](../main/package.json)
