import React, { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });
  //Se puede hacer con useEfect y da el mismo resultado
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setboxSize({ width, height });
  }, [name]);

  return (
    <section>
      <h2 ref={pRef}>
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite, index) => (
          <img key={`${name}-${index}`} src={sprite} alt={name} />
        ))}
      </div>

      <div>
        <code>{JSON.stringify(boxSize)}</code>
      </div>
    </section>
  );
};
