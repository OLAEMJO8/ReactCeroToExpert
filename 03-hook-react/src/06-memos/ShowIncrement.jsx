import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  return (
    <div>
      <button
        onClick={() => {
          increment();
        }}
      >
        Incrementar
      </button>
    </div>
  );
});
