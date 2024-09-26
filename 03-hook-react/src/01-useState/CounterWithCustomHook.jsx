import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, handleAdd, handleSustract, handleReset } = useCounter();

  return (
    <div>
      <br />
      <h1>Counter hook: {counter}</h1>
      <hr />
      <button onClick={() => handleAdd(2)}>+2</button>
      <button onClick={handleSustract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterWithCustomHook;
