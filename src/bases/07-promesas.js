//Promesas
/*
import { getHeroesById } from "../src/bases/06-importaciones.js";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroesById(2);
    resolve(heroe);
  }, 2000);
});

promesa.then((heroe) => {
  console.log("heroe", heroe);
})
.catch(err => console.warn{err})*/

import { getHeroesById } from "./bases/06-importaciones";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se encontro el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
