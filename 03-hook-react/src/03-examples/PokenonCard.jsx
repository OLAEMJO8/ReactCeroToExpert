import React from "react";

export const PokenonCard = ({ id, name, sprites = [] }) => {
  return (
    <section>
      <h2>
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite, index) => (
          <img key={`${name}-${index}`} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
