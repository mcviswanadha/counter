import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";

// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  rootElement
);
