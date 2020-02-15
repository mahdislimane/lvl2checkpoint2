import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Name from "./App1";
import List from "./App2";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Name />, document.getElementById("myname"));
// ReactDOM.render(<List />, document.getElementById("list"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
