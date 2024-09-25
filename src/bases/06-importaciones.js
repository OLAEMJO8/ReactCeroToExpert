//Arreglo de objetos importaciones

import { heroes } from "../src/data/heroes";

const getHeroesById = (id) => {
  return heroes.find((heroe) => {
    return heroe.id === id;
  });
};
console.log(getHeroesById(3));
