import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = count;

  return (
    <div>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr />
      <button onClick={() => setCount({ ...count, counter1: counter1 + 1 })}>
        Increment Counter1
      </button>
      <button onClick={() => setCount({ ...count, counter2: counter2 + 5 })}>
        Increment Counter2
      </button>
      <button onClick={() => setCount({ ...count, counter3: counter3 + 10 })}>
        Increment Counter3
      </button>
    </div>
  );
};

export default CounterApp;
