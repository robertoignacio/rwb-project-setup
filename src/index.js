import React from "react";
import ReactDOM from "react-dom";


// import App.js
import App from "./App.js";

// import styles
import "./styles/main.scss";


// grab image from ./src/images/
import imageWL from "./src/images/ye.jpg";
// grab id from the template html: <img id="webpackLoadsImg" />
const webpackLoadsImg = document.getElementById("webpackLoadsImg");
// add a source to webpackLoadsImg, as the .src method
// if it loads, means that webpack loaded it
webpackLoadsImg.src = imageWL;


// mapping the "what and where", as React 17
ReactDOM.render(
    <>
        <p>with React 17 .render()</p>
        <App />
    </>,
    document.getElementById("root-React17")
)

// mapping the "where and what", as React 18
const root18 = ReactDOM.createRoot(document.getElementById("root-React18"));
root18.render(
    <>
        <p>with React 18 .createRoot()</p>
        <App />
    </>
)



