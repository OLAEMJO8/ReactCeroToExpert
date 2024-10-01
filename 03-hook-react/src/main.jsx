import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import HookApp from "./HookApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/counter">Counter App</Link>
        </li>
        <li>
          <Link to="/custom-counter">useCounter</Link>
        </li>
        <li>
          <Link to="/simple-form">Simple Form - useEffect</Link>
        </li>
        <li>
          <Link to="/hook-form">Hook form - useEffect</Link>
        </li>
        <li>
          <Link to="/multiple-hook">
            Multiple Hook (useCounter + useEffect)
          </Link>
        </li>
        <li>
          <Link to="/focus-screen">useRef</Link>
        </li>
        <li>
          <Link to="/layout">useLayout</Link>
        </li>
      </ul>
    </nav>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/custom-counter" element={<CounterWithCustomHook />} />
        <Route path="/simple-form" element={<SimpleForm />} />
        <Route path="/hook-form" element={<FormWithCustomHook />} />
        <Route path="/multiple-hook" element={<MultipleCustomHook />} />
        <Route path="/focus-screen" element={<FocusScreen />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </Router>
  </StrictMode>
);
