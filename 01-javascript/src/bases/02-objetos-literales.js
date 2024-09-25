// Objetos literales

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "Nueva York",
    calle: "123 main st",
    zip: "123456",
  },
};

//* Crear clon del objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";

//console.log({ persona });
console.table({ persona });
console.table({ persona2 });
