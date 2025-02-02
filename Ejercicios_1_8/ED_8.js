//Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una 
//cadena con un nombre,  verifica si ese nombre está presente en el arreglo y 
//muestra un mensaje apropiado.
const nombres = ["Miguel", "Carlos", "Angel", "Daniel", "María"];

const nombrebuscar = "Lucía";

if (nombres.includes(nombrebuscar)) {
  console.log(`El nombre "${nombrebuscar}" está presente en el arreglo.`);
} else {
  console.log(`El nombre "${nombrebuscar}" NO está presente en el arreglo.`);
}