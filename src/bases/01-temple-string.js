const nombre = "Majo";
const apellido = "Olaechea";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo() {
  return "Hola " + nombre;
}

console.log(`Este es un texto ${getSaludo()}`);
