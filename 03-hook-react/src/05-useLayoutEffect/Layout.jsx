import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
  const { counter, handleAdd, handleSustract } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <div>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading && <p>Loading...</p>}

      <PokemonCard
        id={counter}
        name={data?.name}
        sprites={[
          data?.sprites.front_default,
          data?.sprites.back_default,
          data?.sprites.front_shiny,
          data?.sprites.back_shiny,
        ]}
      />

      <button onClick={() => (counter > 1 ? handleSustract() : null)}>
        anterior
      </button>
      <button onClick={() => handleAdd()}>siguiente</button>
    </div>
  );
};
