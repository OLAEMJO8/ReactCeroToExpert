//Desestructuracion
//Asignacion desestructurante

/* Trabajar con las propiedades del objeto 
Extraer del objeto  las propiedades que se necesitan 
*/

const persona = {
  nombre: "Majo",
  edad: 45,
  clave: "1225sxs",
};

const { nombre } = persona;
console.log(nombre); // "Majo"

//Destructuring en el argumento y agregar valores por defecto
const obtenerContexto = ({ nombre, edad, clave, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      // Cambié 'lanlng' a 'latlng'
      lat: 14.123,
      lng: -12.123,
    },
  };
};

// Extraer variables
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = obtenerContexto(persona);

console.log(nombreClave, anios); // "1225sxs", 45
console.log(lat, lng); // 14.123, -12.123

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p1] = personajes;

console.log(p1);
