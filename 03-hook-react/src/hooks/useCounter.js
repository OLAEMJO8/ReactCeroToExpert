import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = (value = 1) => {
    setCounter(counter + value);
  };

  const handleSustract = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    handleAdd,
    handleSustract,
    handleReset,
  };
};
