import React from "react";

import ReactDom from "react-dom/client";

import { App } from "./app";
import FirstApp from "./FirstApp";
import "./styles.css";
import CounterApp from "./CounterApp";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <FirstApp title="Hola soy Majo" />
    <CounterApp />
  </React.StrictMode>
);
