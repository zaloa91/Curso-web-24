//INCIIO
let contador;


//CONTADOR
contador = 0;


//Tenemoos que idenfiticar todos los elementos html que vayamos a manipular con JS.
//Los guardamos en variables:
let botonSumar = document.getElementById('boton-sumar');
let botonRestar = document.getElementById('boton-restar');

let pTotal = document.getElementById('total');
let pCompleto = document.getElementById('completo');

//BOTONES: Las funciones son bloques de codigo reutilizables que podemos llamar cuando queramos.
function sumar () {

    if (contador < 20) contador++;{
        
    }
    resultado();
}

function restar() {

    if (contador > 0) contador--; {
        
    }
    resultado();
}

function resultado () {
    pTotal.innerHTML = contador;
    //Cada vez que ejecutamos esta funcion el parrafo HTML se actualiza con el valor del contador.
    if (contador = 20) contador == {

    }
}