
function saludar() {
  // let saludo = 'Hola mundo';
  if (true) {
    // console.log(saludo);
    let saludo = 'Hello world';
  }
  console.log(saludo);
}

saludar();



function esMayorDeEdad(edad) {
  if (edad < 18) {
    console.log('No puedes beber, pa tu casa niño');
  }
  else if (edad > 18) {
    console.log('Pasele compra');
  }
  else if (edad === 18) {
    console.log('Apenitas puedes beber, pasele pues');
  }
}

esMayorDeEdad(18);

function esAprobado(calificacion) {
  if (calificacion === 10) {
    console.log('Master, pasaste perfecto!!!');
  }
  else if (calificacion >= 8) {
    console.log('Bro, chido, pasaste bien');
  }
  else if (calificacion >= 7) {
    console.log('Pansaste!!!');
  }
  else if (calificacion < 7) {
    console.log('Chale, echale mas ganas, no pasaste');
  }
}

esAprobado(7.5);

function esVerdadero(variable) {
  if (variable) {
    console.log('Se me considera verdad');
  } else {
    console.log('Se me considera FALSO');
  }
}

esVerdadero(true); // Verdad
esVerdadero(false); // Falso
esVerdadero(18); // Verdad
esVerdadero(-18); // Verdad
esVerdadero(null); // Falso
esVerdadero(undefined); // Falso
esVerdadero(1); // Verdad
esVerdadero(0); // Falso
esVerdadero(NaN); // Falso




function suma(a, b) {
  let suma = a + b;
  return suma;
}

console.log(suma(11, 5));


function imprimirMisFrutas() {
  const misFrutas = ['Manzana', 'Naranja', 'Platano', 'Sandia'];
  const cantidadDeFrutas = misFrutas.length;
  for (let i = 0; i < cantidadDeFrutas; i++) {
    console.log(i);
    console.log(misFrutas[i]);
  }
}

imprimirMisFrutas();

// Tipos de variables

const numero = 8.7; // numerico (int o float)
const mensaje = 'Hola mundo'; // Cadena de texto
const frutas = ['Manzana', 'Naranja', 'Platano', 'Sandia']; // Arreglo
const persona = { // Objeto
  nombre: 'Alan',
  apellidos: 'Diaz Yañez',
  edad: 21
}
// console.log(persona.apellidos);
const condicion = true; // Booleano

const saludar = function () {
  let saludo = 'Hola mundo';
  if (true) {
    let saludo = 'Hello world';
  }
  console.log(saludo);
}

saludar();


// SCOPE Y CLOUSURE

// Contador sin memoria (sin clousure)
function contador() {
  let conteo = 0;
  console.log(++conteo);
}

contador();
contador();
contador();


function creadorDeContador(valorInicial = 0) {
  let conteo = valorInicial;
  const contador = function () {
    conteo++;
    console.log(conteo);
  }
  return contador;
}

const count = creadorDeContador(5);

count();
count();
count();
count();
