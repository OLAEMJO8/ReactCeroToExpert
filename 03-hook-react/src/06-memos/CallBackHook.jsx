import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //Sirve para memorizar funciones, solo se vuelve a precesar cuando algo cambia

  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  /*const incrementFather = () => {
    setCounter(counter + 1);
  };*/

  return (
    <div>
      <h1>useCallback Hook {counter}</h1>
      <ShowIncrement increment={incrementFather} />
    </div>
  );
};
