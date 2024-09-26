import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //Cuando el componente se monta
    first;
    //Cuando el componente se destrulle
    return () => {
      second;
    };
  }, []);
  return (
    <div>
      <h3>Usuario ya existe</h3>
    </div>
  );
};
