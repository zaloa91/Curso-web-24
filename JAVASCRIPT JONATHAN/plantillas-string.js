// Que son plantillas de strings?
// Las plantillas son strings que pueden tener variables interpoladas
// La sintaxis se hace con la tilde inversa ``
let texto = `Hola mundo!`
console.log(texto);
//admiten comillas dentro del string
texto = 'Me llamo Zaloa, pero me llaman "Zaloa"';
console.log(texto);

// --- Interpolación de variables ---
//Podemos construir un string con variables y expresiones las cuales a la hora de mandar a la consola string, se van a sustituar por los valores de las variables
let nombre = 'Jesus';
let edad = '33';

let frase;
frase = "Hola, necesito AIUDA, soy " + nombre + " y tengo " + edad + " años";
console.log(frase)

// interpolando 
frase = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(frase);

// ejemplo (factura)
let precio = 10;
let IVA = 0.21;
// En este caso la interpolacion contiene una expresion que simplemente es una operacion matematica (para calcular el precio con IVA) que usa variables
// el tofixed(2) para que salgan todos los centimos en pantalla
let mensajeTotal = `Total: ${(precio * (1 + IVA)).toFixed(2)}€`;
console.log(mensajeTotal)

//calculo de precio con IVA
console.log(precio * IVA) 
// el valor del iva añadido al precio, pero falta el precio completo
// de ahi que sumemos (precio *1) que representa el precio original
// asi obtenemos el precio original mas el valor añadido por el IVA
console.log((precio * 1) + (precio * IVA));
//Queda pendiente imprimir HTML con plantillas de string
