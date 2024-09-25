// Arreglos: Colecciion de informacion dentro de una misma variable

const arreglo = [];

//! No push porque modifica el objeto principal
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(4);
arreglo.push(5);*/

// Agregar valor al arreglo sin moficar el objeto principal
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2; // Multiplica cada elemento del arreglo por 2
});

console.log(arreglo);
