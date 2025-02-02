
const numeros = [11, 22, 33, 66, 77]; //resultado= 209

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0); 

console.log("La suma de los elementos es:", suma);
