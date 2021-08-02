import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./Components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);