import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});

/* ------------ Opcion menos usada ------------- */

/*import { memo } from "react";

*Memo solo para consideraciones necesarias, solo cuando los props cambian se vuelve a ejecutar
*Optimizacion para funcionalidades internas
*Funcion que le dice a react memoriza este componente

export const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});*/
