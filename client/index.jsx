import React from "react";
import ReactDOM from "react-dom";
import App from "./src/app.jsx";
import "semantic-ui-css/semantic.min.css";
import "./src/styles";
// import "./App.css";
import Navbar from "./src/components/common/Navbar/Navbar.jsx";
import Overview from "./src/components/overview/Overview";

ReactDOM.render(<App />, document.getElementById("app"));
