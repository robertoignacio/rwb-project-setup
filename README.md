# rwb-project-setup
Project Setup for a React webapp, with Webpack & Babel (RWB)

My current local dev env: WSL2 Debian 11 instance, using Node 18 (18.7) with VSCode.

### Project abstract
React (18 (17)) + Webpack + Babel ( + Sass/PostCSS + Astroturf ), instead of using the create-react-app or vite.\
Aiming to build a dev env for CSS-in-JS with webpack dev server.

### Concept around Sass Loader Chain
Uses a manual conditional build at the webpack.config.js, changing the value of the webpack.config.js --> module.exports = { mode: buildMode, ... }
Change the value of buildMode to "development" or "production"
(Not using process.env.NODE_ENV)
- At buildMode: "development" will build with ["style-loader", "css-loader", "postcss-loader", "sass-loader",] (injects the css into the js)\
- At buildMode: "production" will build with [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",] (creates the css files)

I included cache options to run the localhost dev server with the development build so it has short build times per auto-refresh.\
mode: "development" ---> $ npm run build ---> keep the /dist dir ---> $ npm run dev

### WSL2 "disconnected" from VSCode
If the WSL instance gets disconnected from the VSCode remote it tends to be from reaching the max allocated RAM (limit).
Shut the wsl down at a PowerShell terminal with wsl --shutdown, then increase the RAM and/or swap at the .wslconfig (global) file. 
(Draws memory from Docker instances too).

### My notes, and dependencies
- Steps for building this: [Project Log](../main/project-notes/project-log.txt)
- Which dependencies: [package.json](../main/package.json)
