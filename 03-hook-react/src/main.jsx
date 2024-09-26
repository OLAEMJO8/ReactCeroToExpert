import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HookApp from "./HookApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookApp />
    <CounterApp />
    <CounterWithCustomHook />
  </StrictMode>
);
