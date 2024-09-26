import { useState } from "react";
import PropTypes from "prop-types";
const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (event) => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </div>
  );
};

export default CounterApp;

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};
