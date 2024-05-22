//Introducción a JavaScript
console.log('Hola Mundo!');
// console.log(2+1);

//INICIO
console.log("Contador a cero")
contador = 0;

//Entra un cliente
console.log('Entra un cliente')
contador++;


console.log("Numero de personas:" + contador);

//Primer caso: Sale un cliente
console.log('Sale un cliente')
contador--;
console.log("Numero de personas:" + contador);

//Segundo caso: Entra un cliente
console.log('Llega un cliente')
contador++;


contador=20
if (contador == 20) {
    console.log('No entres')
    console.log("Se va a su casa");

} else {
    console.log('Entra el cliente')
    contador++;
    console.log("Numero de personas:" + contador);
}