import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import HookApp from "./HookApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/counter">Counter App</Link>
        </li>
        <li>
          <Link to="/custom-counter">Counter with Custom Hook</Link>
        </li>
        <li>
          <Link to="/simple-form">Simple Form - useEffect</Link>
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
      </Routes>
    </Router>
  </StrictMode>
);
