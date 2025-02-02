const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const valorf = parseFloat(prompt("Valor para filtrar:"));

const numerosF = numeros.filter(numero => numero > valorf);

console.log("Números mayores que", valorf, ":", numerosF);