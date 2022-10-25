const mensajeHTML = document.getElementById("mensaje");
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const mayusculas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

console.log(meses);
meses.forEach(function(item, indice){console.log(indice + ": " + item)});

function parImpar(numeroEntero) {
  let rta;
  let numero = parseInt(numeroEntero);
  if (numero % 2 == 0) {
    rta = "El número es par.";
  } else {
    rta = "El número es impar.";
  }
  mensajeHTML.innerHTML = rta;

  return rta;
}

function tieneMayusculas(texto) {
  let rta = false;
  for (let i = 0; i < texto.length && rta === false; i++) {
    for (let j = 0; j < mayusculas.length && rta === false; j++) {
      if (texto.charAt(i) === mayusculas[j]) {
        rta = true;
      }
    }
  }

  return rta;
}

function tieneMinusculas(texto) {
  let rta = false;
  for (let i = 0; i < texto.length && rta === false; i++) {
    for (let j = 0; j < mayusculas.length && rta === false; j++) {
      if (texto.charAt(i) === mayusculas[j].toLowerCase()) {
        rta = true;
      }
    }
  }

  return rta;
}

function textInfo(texto) {
  let mensaje = "Había texto???";
  if (tieneMayusculas(texto) && tieneMinusculas(texto)) {
    mensaje = "El texto tiene tanto MAYÚSCULAS como minúsculas.";
  } else if (tieneMayusculas(texto)) {
    mensaje = "Solamente tiene MAYÚSCULAS.";
  } else if (tieneMinusculas(texto)) {
    mensaje = "Solamente tiene minúsculas.";
  }
  mensajeHTML.innerHTML = mensaje;
  return mensaje;
}

//Había que hacerlo con for, changos.
function factorial(n) {
  let num = parseInt(n);
  let factorizacion = 1;
  if (num > 0) {
    factorizacion = num * factorial(num - 1);
  }

  return factorizacion;
}
