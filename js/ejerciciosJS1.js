/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

//1- Crea una variable "string", puede contener lo que quieras:
function ejerciciosJS1_1() {
  let nuevaString = prompt("Ingrese lo que quiera: ");
  alert(`Dato ingresado: ${nuevaString} 
Tipo: ${typeof nuevaString}`);
  console.log(`Ejercicio 1:
  Dato ingresado: ${nuevaString} 
  Tipo: ${typeof nuevaString}`);
}

//2- Crea una variable numérica, puede ser cualquier número:
function ejerciciosJS1_2() {
  let nuevoNum = +prompt("Ingrese un número: ");
  alert(`Número ingresado: ${nuevoNum} 
Tipo: ${typeof nuevoNum}`);
  console.log(`Ejercicio 2:
  Número ingresado: $nuevoNum} 
  Tipo: ${typeof nuevoNum}`);
}

// //3- Crea una variable booleana:
function ejerciciosJS1_3() {
  let nuevoBool = confirm(`Aceptar = True
Cancelar = False`);
  alert(`Elección: ${nuevoBool}
Tipo: ${typeof nuevoBool}`);
  console.log(`Ejercicio 3:
Elección: ${nuevoBool}
Tipo: ${typeof nuevoBool}`);
}

//4- Resuelve el siguiente problema matemático:
function ejerciciosJS1_4() {
  nuevaResta = 10 - 5;
  alert(`10 - 5 = ${nuevaResta}`);
  console.log(`Ejercicio 4:
10 - 5 = ${nuevaResta}`);
}

//5- Resuelve el siguiente problema matemático:
function ejerciciosJS1_5() {
  nuevaMultiplicacion = 10 * 4;
  alert(`10x4 = ${nuevaMultiplicacion}`);
  console.log(`Ejercicio 5:
10 x 4 = ${nuevaMultiplicacion}`);
}

// //6- Resuelve el siguiente problema matemático:
function ejerciciosJS1_6() {
  nuevoModulo = 21 % 5;
  alert(`21mod5 = ${nuevoModulo}`);
  console.log(`Ejercicio 6:
21mod5 = ${nuevoModulo}`);
}

//////////////////////////////////////////////////////////
//7-
function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  alert(str);
  console.log(`Ejercicio 7:
${str}`);
}

function ejerciciosJS1_7() {
  let str = prompt(`Ingrese un texto: `);
  devolverString(str);
}

// //////////////////////////////////////////////////////////
// //8-
function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  alert(`${x} + ${y} = ${x + y}`);
  console.log(`Ejercicio 8:
${x} + ${y} = ${x + y}`);
}

function ejerciciosJS1_8() {
  let num1 = +prompt(`Ingrese el número "x": `);
  let num2 = +prompt(`Ingrese el número "y": `);
  suma(num1, num2);
}

// //////////////////////////////////////////////////////////
// 9-
function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  alert(`${x} - ${y} = ${x - y}`);
  console.log(`Ejercicio 9:
${x} - ${y} = ${x - y}`);
}

function ejerciciosJS1_9() {
  let num1 = +prompt(`Ingrese el número "x": `);
  let num2 = +prompt(`Ingrese el número "y": `);
  resta(num1, num2);
}

// //////////////////////////////////////////////////////////
//10-
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:

  alert(`${x} x ${y} = ${x * y}`);
  console.log(`Ejercicio 10:
${x} x ${y} = ${x * y}`);
}

function ejerciciosJS1_10() {
  let num1 = +prompt(`Ingrese el número "x": `);
  let num2 = +prompt(`Ingrese el número "y": `);
  multiplica(num1, num2);
}

// //////////////////////////////////////////////////////////
//11-
function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

  alert(`${x}/${y} = ${Math.round((100 * x) / y) / 100}`);
  console.log(`Ejercicio 11:
${x}/${y} = ${Math.round((100 * x) / y) / 100}`);
}

function ejerciciosJS1_11() {
  let num1 = +prompt(`Ingrese el número "x": `);
  let num2 = +prompt(`Ingrese el número "y": `);
  divide(num1, num2);
}

const calculadora = () => {
  let num1 = +prompt(`Ingrese el número "x": `);
  let operador;
  do {
    operador = prompt(`Que operación deseas realizar (+,-,/,*):`);
  } while (
    operador !== "+" &&
    operador !== "-" &&
    operador !== "/" &&
    operador !== "*"
  );

  operador === "+"
    ? (operador = suma)
    : operador === "-"
    ? (operador = resta)
    : operador === "*"
    ? (operador = multiplica)
    : (operador = divide);

  let num2 = +prompt(`Ingrese el número "y": `);

  operador(num1, num2);
};

// //////////////////////////////////////////////////////////
//12-
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x === y) {
    alert(true);
    console.log(`Ejercicio 12:
${true}`);
  } else {
    alert(false);
    console.log(`Ejercicio 12:
${false}`);
  }
}

function ejerciciosJS1_12() {
  let num1 = +prompt(`Ingrese el número "x": `);
  let num2 = +prompt(`Ingrese el número "y": `);
  sonIguales(num1, num2);
}

// //////////////////////////////////////////////////////////
//13-
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    alert(`${true} 
      ${str1} (${str1.length})
      ${str2} (${str2.length})`);
    console.log(`Ejercicio 13:
${true} 
${str1} (${str1.length})
${str2} (${str2.length})`);
  } else {
    alert(`${false} 
      ${str1} (${str1.length})
      ${str2} (${str2.length})`);
    console.log(`Ejercicio 13:
${false} 
${str1} (${str1.length})
${str2} (${str2.length})`);
  }
}

function ejerciciosJS1_13() {
  let palabra1 = prompt(`Ingrese la primer palabra: `);
  let palabra2 = prompt(`Ingrese la segunda palabra: `);
  tienenMismaLongitud(palabra1, palabra2);
}

// //////////////////////////////////////////////////////////
//14-
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  num < 90 ? alert(true) : alert(false);
  num < 90
    ? console.log(`Ejercicio 14:
  ${true}`)
    : console.log(`Ejercicio 14:
  ${false}`);
}

const ejerciciosJS1_14 = () => {
  let numero = +prompt("Ingrese un numero: ");
  menosQueNoventa(numero);
};

// //////////////////////////////////////////////////////////
//15-
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  num > 50 ? alert(true) : alert(false);
  num > 50
    ? console.log(`Ejercicio 15:
  ${true}`)
    : console.log(`Ejercicio 15:
  ${false}`);
}

const ejerciciosJS1_15 = () => {
  let numero = +prompt("Ingrese un numero: ");
  mayorQueCincuenta(numero);
};

// //////////////////////////////////////////////////////////
//16-
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  alert(`Resto = ${x % y}`);
  console.log(`Ejercicio 16:
División: ${x}/${y}  
Resto: ${x % y}`);
}

const ejerciciosJS1_16 = () => {
  let dividendo = +prompt("Ingrese el dividendo: ");
  let divisor = +prompt("Ingrese el dividendo: ");

  obtenerResto(dividendo, divisor);
};

// //////////////////////////////////////////////////////////
//17
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  // num % 2 === 0 ? alert(true) : alert(false);
  alert(num % 2 === 0);
  num % 2 === 0
    ? console.log(`Ejercicio 17:
  ${true}
  el número ${num} es par`)
    : console.log(`Ejercicio 17:
  ${false}
  el número ${num} no es par`);
}

const ejerciciosJS1_17 = () => {
  const num = +prompt(`Ingrese un número`);
  esPar(num);
};

// //////////////////////////////////////////////////////////
//18-
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  num % 2 === 1 ? alert(true) : alert(false);
  num % 2 === 1
    ? console.log(`Ejercicio 17:
  ${true}
  el número ${num} es impar`)
    : console.log(`Ejercicio 17:
  ${false}
  el número ${num} no es impar`);
}

const ejerciciosJS1_18 = () => {
  const num = +prompt(`Ingrese un número: `);
  esImpar(num);
};

// //////////////////////////////////////////////////////////
//19-
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  alert(Math.pow(num, 2));
  console.log(`Ejercicios 19:
${num} al cuadrado = ${Math.pow(num, 2)}`);
}

const ejerciciosJS1_19 = () => {
  const num = +prompt(`Ingrese un número: `);
  elevarAlCuadrado(num);
};

// //////////////////////////////////////////////////////////
//20-
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  alert(Math.pow(num, 3));
  console.log(`Ejercicios 20:
${num} al cubo = ${Math.pow(num, 3)}`);
}

const ejerciciosJS1_20 = () => {
  const num = +prompt(`Ingrese un número: `);
  elevarAlCubo(num);
};

// //////////////////////////////////////////////////////////
//21-
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  alert(Math.pow(num, exponent));
  console.log(`Ejercicios 21:
${num} elevado al exponente ${exponent} = ${Math.pow(num, exponent)}`);
}

const ejerciciosJS1_21 = () => {
  const num = +prompt(`Ingrese un número: `);
  const exp = +prompt(`exponent: `);

  elevar(num, exp);
};

// //////////////////////////////////////////////////////////
//22-
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  alert(Math.round(num));
  console.log(`Ejercicio 22:
  Número ingresado = ${num}
  Redondeo = ${Math.round(num)}`);
}

const ejerciciosJS1_22 = () => {
  const num = +prompt("Ingrese un numero con decimales: ");
  redondearNumero(num);
};

// //////////////////////////////////////////////////////////
//23-
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  alert(Math.ceil(num));
  console.log(`Ejercicio 23:
  Número ingresado = ${num}
  Redondeo = ${Math.ceil(num)}`);
}

const ejerciciosJS1_23 = () => {
  const num = +prompt("Ingrese un numero con decimales: ");
  redondearHaciaArriba(num);
};

// //////////////////////////////////////////////////////////
//24-
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let numRandom = Math.round(Math.random() * 1000) / 1000;

  alert(numRandom);
  console.log(`Ejercicio 24:
Número al azar entre 0 y 1: ${numRandom}`);
}

const ejerciciosJS1_24 = () => {
  numeroRandom();
};

// //////////////////////////////////////////////////////////
//25-
function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (Number.isInteger(num))
    if (num > 0) {
      alert("Es positivo");
      console.log(`Ejercicio 25:
numero ingresado: ${num} -> Es positivo`);
    } else if (num < 0) {
      alert("Es negativo");
      console.log(`Ejercicio 25:
numero ingresado: ${num} -> Es negativo`);
    } else {
      alert(false);
      console.log(`Ejercicio 25:
numero ingresado: ${num} -> ${false}`);
    }
  else {
    alert("no es un numero entero");
    console.log(`Ejercicio 25:
 Ingresaste: ${num} -> no es un numero entero`);
  }
}

const ejerciciosJS1_25 = () => {
  const numero = +prompt("Ingrese un numero entero:");
  esPositivo(numero);
};

// //////////////////////////////////////////////////////////
//26-
function SimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  alert(str + "!");
  console.log(`Ejercicio 26:
${str}!`);
}

const ejerciciosJS1_26 = () => {
  const frase = prompt("Ingrese una frase: ");
  SimboloExclamacion(frase);
};

// //////////////////////////////////////////////////////////
//27-
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Bruce" "Wayne" -> "Soy, Bruce Wayne"
  // Tu código:
  alert("Soy " + nombre + " " + apellido);
  console.log(`Ejercicio 27:
Soy ${nombre} ${apellido}`);
}

const ejerciciosJS1_27 = () => {
  const nombre = prompt("Ingrese su nombre: ");
  const apellido = prompt("Ingrese su apellido: ");

  combinarNombres(nombre, apellido);
};

// //////////////////////////////////////////////////////////
//28-
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  alert("Hola " + nombre + "!");
  console.log(`Ejercicio 28:
Hola ${nombre}!`);
}

const ejerciciosJS1_28 = () => {
  const nombre = prompt("Ingrese su nombre: ");
  obtenerSaludo(nombre);
};

// //////////////////////////////////////////////////////////
//29-
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectangulo teniendo su altura y ancho
  // Tu código:
  alert(`Area del RECTANGULO = ${alto * ancho}`);
  console.log(`Ejercicio 29:
Base = ${ancho}
Altura = ${alto}
Area del RECTANGULO = ${alto * ancho}`);
}

const ejerciciosJS1_29 = () => {
  const base = prompt("Ingrese la base del rectangulo: ");
  const altura = prompt("Ingrese la altura del rectangulo: ");

  obtenerAreaRectangulo(altura, base);
};

// //////////////////////////////////////////////////////////
//30 -
function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  alert(`Perimetro del cuadrado = ${4 * lado}`);
  console.log(`Ejercicio 30:
lado = ${lado}
Perimetro del cuadrado = ${4 * lado}`);
}

const ejerciciosJS1_30 = () => {
  const lado = prompt("Ingrese la longitud del lado del cuadrado: ");

  retornarPerimetro(lado);
};

// //////////////////////////////////////////////////////////
//31-
function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  alert(`Área del triangulo = ${(base * altura) / 2}`);
  console.log(`Ejercicio 31:
Base = ${base}
Altura = ${altura}
Área del triangulo = ${(base * altura) / 2}`);
}

const ejerciciosJS1_31 = () => {
  const base = prompt("Ingrese la base del triángulo: ");
  const altura = prompt("Ingrese la altura del trianángulo: ");

  areaDelTriangulo(base, altura);
};

// //////////////////////////////////////////////////////////
//32-
function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  alert(`${euro} Euros = ${1.2 * euro} USD`);
  console.log(`Ejercicio 32:
${euro} Euros = ${1.2 * euro} USD`);
}

const ejerciciosJS1_32 = () => {
  const eu = +prompt(
    `Ingrese la cantidad de Euros que quiera pasar a dolares: `
  );
  deEuroAdolar(eu);
};

// //////////////////////////////////////////////////////////
//33-
// let letra;
// function esVocal(letra) {
//   //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//   //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//   //si ingresa una consonante muestre en pantalla dato incorrecto
//   //Escribe tu código aquí

//   if (letra.length < 2) {
//     letra = letra.toLowerCase();
//     if (
//       letra === "a" ||
//       letra === "e" ||
//       letra === "i" ||
//       letra === "o" ||
//       letra === "u"
//     ) {
//       console.log("Es vocal");
//     } else {
//       console.log("No es vocal");
//     }
//   } else {
//     console.log("Debes ingresar solo un caracter");
//   }
// }

// esVocal("I");
const vowels = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "à",
  "è",
  "ì",
  "ò",
  "ù",
  "ä",
  "ë",
  "ï",
  "ö",
  "ü",
];
function esVocal(letra) {
  if (letra.length < 2) {
    const existingVowel = vowels.find((vowel) => vowel === letra.toLowerCase());
    if (existingVowel) {
      alert(`Es vocal`);
      console.log(`Ejercicio 33:
Ingresaste: ${letra}
Es vocal`);
    } else {
      alert(`No es vocal`);
      console.log(`Ejercicio 33:
Ingresaste: ${letra}
No es vocal`);
    }
  } else {
    alert(`Debes ingresar solo un caracter`);
    console.log(`Ejercicio 33:
Ingresaste: ${letra}
Debes ingresar solo un caracter`);
  }
}

const ejerciciosJS1_33 = () => {
  const letter = prompt("Ingrese una vocal:");
  esVocal(letter);
};
