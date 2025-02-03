console.log("3.- Palíndromo");
//Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).
var palabra = "aramara"
var tamaño = palabra.length
var mitad = tamaño % 2 == 1 ? (tamaño-1)/2 : tamaño/2;

for (let i = 0; i <= mitad; i++){
    if (palabra[i] == palabra[tamaño-1-i]){
    }else{
        console.log(`La palabra: ${palabra} no es Palíndromo`);
        break;
    }
    i+1 > mitad ? console.log(`La palabra: ${palabra} es un Palíndromo`) : "";
}