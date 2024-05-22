console.log("arrays")
//A diferencia de una variable, que solo puede guardar un dato a la vez, los arrays o "arreglos" spm variables multidimensionales, es decir, que podemos almacenar datos en ellas en varias dimensiones, como si fuese una estanteria, con diferentes baldas y niveles distintos.

//Arrays bidimensionales
let arrayejemplo = ["uno", "dos", "tres", "cuatro"]

//Para acceder a los datos de un array, tenemos que indicar la posicion del elemento al que queramos acceder
let texto = arrayejemplo[3]
console.log(texto);

//Crear arrays
//manualmente
const alumnas = ["Arantxa", "Aleja", "Nicole"]
//al declarar con "const" el "array" se hará constante y no se podrá modificar, es una buena practica de programación trabajar con arrays constantes

//a partir de variables
// porque usar arrays? 


//Ejercicio:
let alumna1 = "Cristina";
let alumna2 = "Zaloa";
let alumna3 = "Natalia";
//Para no tener que poner 50mil "let"s ponemos Array. El array puede guardar muchos valores usando solo un nombre y puede usar estos valores con una referencia del indice de estos.

const listaAlumnas = [alumna1, alumna2];
//Que salga solo un elemento del array en la consola 
console.log(listaAlumnas [1]);

console.log(listaAlumnas[1] + " y " + listaAlumnas[0]);

//También podemos crear un array y posterior añadir los items:

const coches = [];
coches [0] = "Mercedes Benz";
coches [1] = "Toyota";
coches [2] = "Mitsubishi"
console.log(coches);
coches[0] = "Hyundai";
console.log(coches);

console.log(listaAlumnas.toString());

//LONGITUD (LENGTH): Es la longitud de la lista de items de un array.
console.log(listaAlumnas.length)
//acceder al primer elemento de un array
console.log(listaAlumnas[0]);
//acceder al ultimo elemento[]
console.log(listaAlumnas [listaAlumnas.length - 1]);
//dentro de cocrchetes: listaAlumnas.length = 2
//luego le restamos para que el numero coincida con el ultimo indicce que en este caso seria 1
