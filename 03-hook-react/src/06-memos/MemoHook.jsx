import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }
};

export const MemoHook = () => {
  const { counter, handleAdd } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memoizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div>
      <h1>
        MemoHook <small>{counter}</small>
      </h1>
      <h4>{memoizedValue}</h4>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
