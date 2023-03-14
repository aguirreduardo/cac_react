/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Eduardo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 38;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

//////////////////////////////////////////////////////////

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log(str);
}

devolverString("Hola codo a codo");

//////////////////////////////////////////////////////////

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log(`${x} + ${y} = ${x + y}`);
}

suma(2, 5);

//////////////////////////////////////////////////////////

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  console.log(`${y} - ${x} = ${y - x}`);
}

resta(3, 7);

//////////////////////////////////////////////////////////

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(`${x} x ${y} = ${x * y}`);
}
multiplica(5, 6);

//////////////////////////////////////////////////////////

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(`${x}/${y} = ${Math.round((100 * x) / y) / 100}`);
}
divide(10, 3);

//////////////////////////////////////////////////////////

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  x === y ? console.log("true") : console.log("false");
}
sonIguales(2, 5);

//////////////////////////////////////////////////////////

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
tienenMismaLongitud("gato", "vaca");

//////////////////////////////////////////////////////////

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  num < 90 ? console.log(true) : console.log(false);
}
menosQueNoventa(25);
menosQueNoventa(100);

//////////////////////////////////////////////////////////

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  num > 50 ? console.log(true) : console.log(false);
}
mayorQueCincuenta(60);
mayorQueCincuenta(20);
mayorQueCincuenta(40);

//////////////////////////////////////////////////////////

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  console.log(`${x} mod ${y} = ${x % y}`);
}

obtenerResto(5, 2);

//////////////////////////////////////////////////////////

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  num % 2 === 0 ? console.log(true) : console.log(false);
}

esPar(120);

//////////////////////////////////////////////////////////

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  num % 2 === 1 ? console.log(true) : console.log(false);
}

esImpar(23);

//////////////////////////////////////////////////////////

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}

console.log(elevarAlCuadrado(3));

//////////////////////////////////////////////////////////

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}

console.log(elevarAlCubo(3));

//////////////////////////////////////////////////////////

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}

console.log(elevar(5, 3));

//////////////////////////////////////////////////////////

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

console.log(redondearNumero(2.4));
console.log(redondearNumero(2.6));

//////////////////////////////////////////////////////////

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

console.log(redondearHaciaArriba(2.1));

//////////////////////////////////////////////////////////

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random() * 1;
}

console.log(Math.trunc(100 * numeroRandom()) / 100);
//////////////////////////////////////////////////////////

function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (Number.isInteger(num))
    if (num > 0) {
      return "Es positivo";
    } else if (num < 0) {
      return "Es negativo";
    } else {
      return false;
    }
  else {
    return "no es un numero entero";
  }
}

console.log(esPositivo(2));
console.log(esPositivo(-5));
console.log(esPositivo(0));
console.log(esPositivo("Hola"));

//////////////////////////////////////////////////////////

function SimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}

console.log(SimboloExclamacion("hello world"));

//////////////////////////////////////////////////////////

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return "Soy " + nombre + " " + apellido;
}

console.log(combinarNombres("Eduardo", "Aguirre"));

//////////////////////////////////////////////////////////

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
}
console.log(obtenerSaludo("Belen"));

//////////////////////////////////////////////////////////

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return "Area del RECTANGULO = " + alto * ancho;
}

console.log(obtenerAreaRectangulo(5, 6));

//////////////////////////////////////////////////////////

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return "Perimetro del cuadrado = " + 4 * lado;
}

console.log(retornarPerimetro(4));

//////////////////////////////////////////////////////////

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return "Área del triángulo = " + (base * altura) / 2;
}

console.log(areaDelTriangulo(3, 5));

//////////////////////////////////////////////////////////

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro + " Euros = " + 1.2 * euro + " USD";
}

console.log(deEuroAdolar(10));

//////////////////////////////////////////////////////////
let letra;
function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

  if (letra.length < 2) {
    letra = letra.toLowerCase();
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      console.log("Es vocal");
    } else {
      console.log("No es vocal");
    }
  } else {
    console.log("Debes ingresar solo un caracter");
  }
}

esVocal("I");
