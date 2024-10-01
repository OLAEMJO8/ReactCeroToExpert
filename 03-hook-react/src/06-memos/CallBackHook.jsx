import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //Sirve para memorizar funciones, solo se vuelve a precesar cuando algo cambia

  /* Agregar argumento para que incremente de 5 en 5
  incrementFather es igual a la funcion que se llama en ShowIncrement como increment
  
  
  
  */
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
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
