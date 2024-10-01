import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  return (
    <div>
      {/* Agregar argumento para que incremente de 5 en 5
      Ver en CallBackHook la funcion incrementFather para ver la funcion anonima que pasa los argumentos
      
      
      */}
      <button
        onClick={() => {
          increment(5);
        }}
      >
        Incrementar
      </button>
    </div>
  );
});
