//Arreglo de objetos importaciones

import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {
  return heroes.find((heroe) => {
    return heroe.id === id;
  });
};
console.log(getHeroesById(3));
