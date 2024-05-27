console.log('Metodos');

//Metodos de string
//Obtener la longitud de string
let texto =  "ABCDEFGHIKLMNOPQRSTUVWYZ"
let longitud = texto.length;

console.log(longitud); 

//ejemplo: comparar las contraseñas de un formulario de registro
let contraseña1;
let contraseña2;

//una de las condiciones que suelen pedir para las contraseñas es que tenga por lo menos cierta longitud de caracteres
contraseña1 = "1234";

//supongamos que una página requiere que las contraseñas sean de por lo menos 8 caracteres: let longitudRequerida = 8;
let longitudRequerida = 8;
// el usuario ingresa una contraseña:
contraseña1 = "1234";


//ahora comparamos la longitud de la contraseña 
if (contraseña1.length >= longitudRequerida)  {
    console.log ("La contraseña es válida")
} else{
    console.log ("La contraseña debe tener al menos 8 caracteres")
}


//Extraer caracteres ---- 
// con charAt
texto= "Hola Mundo";
let primeraLetra = texto.charAt(0);


console.log(primeraLetra);
let ultimaLetra = texto.charAt(texto.length -1); 
console.log(ultimaLetra);


//at ()
//en principio funciona igual que charAt
texto = "Feliz Viernes!";
primeraLetra = texto.at(0);
console.log(primeraLetra);
//excepto cuando contamos desde el final.
//charAt() no admite numeros negativos en el indice pero at() si.
ultimaLetra = texto.charAt(-1);
console.log(ultimaLetra);

ultimaLetra = texto.at(-1);
console.log(ultimaLetra);

let letraR = texto.at(-5);
console.log(letraR);

//Un string tambien se puede leer como un array
let letra = texto[6];
console.log(letra);

// ---- Extraer trozos de un string ----
//slice(inicio, final) PARA CORTAR ESE CARACTER
//retorna un nuevo string usando las posiciones inicial y final como parametros (lo que ponemos dentro del parentesis). Los espacios tambien cuentan con caracteres
texto = "Yogur, Donettes, Patatas";
let trozo = texto.slice(7, 14);
console.log(trozo)
//slice corta el resto del string 
trozo = texto.slice(7);
console.log(trozo);

//slice() admite valores negativos:
//con valores negativos cuenta desde el final hacia la izquierda
trozo = texto.slice(-7);
console.log(trozo);


trozo = texto.slice(-17, -9)
console.log(trozo);

//---- transformar un string ----
//a mayusculas:
let textoMayus = texto.toUpperCase();
console.log(textoMayus);


//---- transformar un string ----
//a minusculas:
let textoMinus = texto.toLowerCase();
console.log(textoMinus)

// --- conectar (unir) texto ---
let nombre = "Caroline";
let apellido = "Garcia";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
// esto de abajo es lo mismo que lo de arriba
nombreCompleto = nombre.concat(" ", apellido)
console.log(nombreCompleto);

// -- Limpiar strings --
//trim() elimina los pesacios en blanco al inicio y al final de un string
texto = "    Me llamo Zaloa       "
console.log(texto);
console.log(texto.length);

//a veces es necesario limpiar los strings para por ejemplo guardar estos datos en una base de datos.
let textoLimpio = texto.trim();
console.log(textoLimpio.length);


// --- reemplazar strings ---
texto = textoLimpio;
console.log(texto);
texto = texto.replace("Jonathan", "Alberto");
console.log(texto);

//---Convertir un string en un array ---
//split(separador)
texto = "Yogur, Donettes, Patatas";
const listaCompra = texto.split(", ");
console.log(listaCompra);

//--- Busquedas en strings ---
// search busca la primera letra del texto buscado:
let posicionDonettes = texto.search("Donettes")
console.log(posicionDonettes);

