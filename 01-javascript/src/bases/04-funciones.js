//! No Funciones faciles de modificar
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

//* Usar funciones como constantes
const saludar1 = function (nombre) {
  return `Hola, ${nombre}`;
};

//Funciones de flecha

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);

// Remplazar el return en la funcion flecha para que devuelva el objeto, remplazando por ()
const getUser = () => ({
  uid: "ABC12",
  username: "Majo08",
});

const user = getUser();
console.log(user);

//Retornar objeto implicito

const getUsuarioActivo = (nombre) => ({
  uid: "ABC12",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Majo1995");
console.log(usuarioActivo);
