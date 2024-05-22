
//Las variables son cajitas donde guardamos datos. 
//Primero debemos declarar una variable
let nombre;

//Let significa que tenemos la intención de utilizar una variable dentro del contexto del codigo actual.

//Podemos usar las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual.

//- Mofidicar una variable:
nombre = "Zaloa";
nombre = "Nicole";
// -Llamar a una variable:
console.log(nombre);

//Las variables pueden contener tres tipos de datos:

//1. Cadenas de texto
apellido = "Vispo";
//Las cadenas de texto son solo caractreres plantos. No se puede operar con ellas, solo unirlas o separarlas.
nombre = "Zaloa";

console.log(nombre + apellido);
nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//Las cadenas de texto se definen por llevar comillas tanto al principio como al final.

//2. Integers o numeros integros
edad = 15;

//Son numeros operables. Se puede sumar, restar...y hacer todo tipo de cálculos con ellos.
//Un ejemplo que necesitamos guardar un int es quetendreos que calcular datos a partir de estos:
añoNacimiento = 2024 - edad;
let mayorEdad = true;
console.log(añoNacimiento);

//Saber si es mayor de edad
if (edad >= 18) {
    console.log(nombre + " " + "eres mayor de edad")
} else {
    console.log(nombre + " es menor de edad. Le quedan " + (18-edad) + " años para eres mayor de edad")
    mayorEdad = false;
}

//ejemplo de dato numerico que va en una cadena de texto (string)
dni = "72579877";
cp = "48980";
nss = "123456789";
telf = "691492818";

//3. Booleano o estado binario
espesa = true;

//solo pueden tener dos valores "true" o "false". Se generan a partir de comparaciones

if (espesa == true) {
    console.log("tomar café inmediatamente")
    
}

if ("puedes entrar al pub") {
    

}
//Las tres son iguales
if (mayorEdad !=true) {  }

if (mayorEdad == false) {   }

if (!mayorEdad) { }

