console.log("2.- Reversión de cadena" ); 
//Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.
var frase = "Hola Mundo";
var separada =frase.split(" ")
var resultado = ""
for (let i = separada.length-1; i >= 0; i--) {
    const element = separada[i];
    resultado += element + " ";
    
}
console.log( `Frase: ${frase}, Frase investida: ${resultado}`);