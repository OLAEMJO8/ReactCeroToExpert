import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import { MemoHook } from "./MemoHook";

export const Memorize = () => {
  const { counter, handleAdd } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
      <hr />
      <MemoHook />
    </div>
  );
};
