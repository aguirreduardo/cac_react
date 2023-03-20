//Ejercicio 1
// function obtenerMayor(x, y) {
//   // "x" e "y" son números enteros .
//   // Devuelve el número más grande
//   // Si son iguales, devuelve cualquiera de los dos
//   // Tu código:

const obtenerMayor = (x, y) => {
  //let resultado; //No hace falta
  return x >= y ? x : y;
};

const ejerciciosJS2_1 = () => {
  const num1 = +prompt("Ingrese el primer número: ");
  const num2 = +prompt("Ingrese el segundo número: ");

  alert(obtenerMayor(num1, num2));
  console.log(`Ejercicio 1:
Numeros ingresados:
x = ${num1}
y = ${num2}
mayor = ${obtenerMayor(num1, num2)}
`);
};

/////////////////////////////////////////////////

//Ejercicio 2
// function mayoriaDeEdad(edad) {
//   //Determinar si la persona según su edad puede ingresar a un evento.
//   //Si tiene 18 años ó más, devolver --> "Allowed"
//   //Si es menor, devolver --> "Not allowed"
// }

const mayoriaDeEdad = (edad) => {
  return edad >= 18 ? "Allowed" : "Not allowed";
};

const ejerciciosJS2_2 = () => {
  const edad = +prompt("Ingresa tu edad: ");
  alert(mayoriaDeEdad(edad));
  console.log(`Ejercico 2:
  Edad ingresada: ${edad}
  Acceso: ${mayoriaDeEdad(edad)}`);
};

///////////////////////////////////////////////////

//Ejercicio 3
// function conection(status) {
//   //Recibimos un estado de conexión de un usuario representado por un valor numérico.
//   //Cuando el estado es igual a 1, el usuario está "Online"
//   //Cuando el estado es igual a 2, el usuario está "Away"
//   //De lo contrario, presumimos que el usuario está "Offline"
//   //Devolver el estado de conexión de usuario en cada uno de los casos.
// }

const conection = (status) => {
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
};

const ejerciciosJS2_3 = () => {
  estado = +prompt(`Cual es tu estado para esta practica?
  1 - En linea  
  2 - Ausente (No disponible)
  Ingresa una opcion: `);

  alert(conection(estado));
  console.log(`Ejercicio 3:
  Status: ${estado} => ${conection(estado)}`);
};

///////////////////////////////////////////////////

//Ejercicio 4
// function saludo(idioma) {
//   // Devuelve un saludo en tres diferentes lenguajes:
//   // Si "idioma" es "aleman", devuelve "Guten Tag!"
//   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
//   // Si "idioma" es "ingles", devuelve "Hello!"
//   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
//   // Tu código:
// }

const saludo = (idioma) => {
  return idioma === 1
    ? "Guten Tag!"
    : idioma === 2
    ? "Ni Hao!"
    : idioma === 3
    ? "Hello!"
    : "Hola!";
};

const ejerciciosJS2_4 = () => {
  const idioma = +prompt(`En que idioma quieres que te salude:
  1 - Alemán
  2 - Mandarín
  3 - Ingles
  Elige una opción (1, 2 o 3):`);
  alert(saludo(idioma));
  console.log(`Ejercicio 4:
  ${saludo(idioma)}`);
};

///////////////////////////////////////////////////

//Ejercicio 5
// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuelve --> "This is blue"
//   //En caso que el color recibido sea "red", devuelve --> "This is red"
//   //En caso que el color recibido sea "green", devuelve --> "This is green"
//   //En caso que el color recibido sea "orange", devuelve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
// }

const colors = (color) => {
  switch (color.toLowerCase()) {
    case "blue":
      return "This is blue";
      break;

    case "red":
      return "This is red";
      break;

    case "green":
      return "This is green";

      break;

    case "orange":
      return "This is orange";
      break;

    default:
      return "Color not found";
      break;
  }
};

const ejerciciosJS2_5 = () => {
  const color = prompt(`Escribe un color(blue, red, green or orange):`);
  console.log(`Ejercicio 5:
  ${colors(color)}`);
};

///////////////////////////////////////////////////

//Ejercicio 6
// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

const esDiezOCinco = (numero) => {
  return numero === 5 || numero === 10 ? true : false;
};

const ejerciciosJS2_6 = () => {
  const num = +prompt("Ingrese un número: ");
  alert(esDiezOCinco(num));
  console.log(`Ejercicio 6:
  Número ingresado: ${num} => ${esDiezOCinco(num)}`);
};

///////////////////////////////////////////////////

//Ejercicio 7
// function estaEnRango(numero) {
// //   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
// //   // De lo contrario, devuelve "false"
// //   // Tu código:
// // }

const estaEnRango = (numero) => {
  return numero > 20 && numero < 50 ? true : false;
};

const ejerciciosJS2_7 = () => {
  const num = +prompt("Ingrese un número: ");
  alert(estaEnRango(num));
  console.log(`Ejercicio 7:
  Está ${num} en el rango (20,50)? => ${estaEnRango(num)}`);
};

///////////////////////////////////////////////////

//Ejercicio 8
// function esEntero(numero) {
//   // Devuelve "true" si "numero" es un entero (int/integer)
//   // Ejemplo: 0.8 -> false
//   // Ejemplo: 1 -> true
//   // Ejemplo: -10 -> true
//   // De lo contrario, devuelve "false"
//   // Pista: Puedes resolver esto usando `Math.floor`
//   // Tu código:
// }

const esEntero = (numero) => {
  return Number.isInteger(numero);
};

const ejerciciosJS2_8 = () => {
  const num = +prompt(`Ingrese un número: `);
  alert(esEntero(num));
  console.log(`Ejercicio 8:
  ${num} es un número entero? ${esEntero(num)} `);
};

///////////////////////////////////////////////////

//Ejercicio 9
// function fizzBuzz(numero) {
//   // Si "numero" es divisible entre 3, devuelve "fizz"
//   // Si "numero" es divisible entre 5, devuelve "buzz"
//   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//   // De lo contrario, devuelve el numero
// }

const fizzBuzz = (numero) => {
  return numero % 3 === 0 && numero % 5 === 0
    ? "fizzbuzz"
    : numero % 3 === 0
    ? "fizz"
    : numero % 5 === 0
    ? "buzz"
    : numero;
};

const ejerciciosJS2_9 = () => {
  const num = +prompt("Ingrese un número: ");
  alert(fizzBuzz(num));
  console.log(`Ejercicio 9:
  Numero ingresado = ${num} => ${fizzBuzz(num)}`);
};

///////////////////////////////////////////////////

//Ejercicio 10
// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos.
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
// }

const operadoresLogicos = (num1, num2, num3) => {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
};

const ejerciciosJS2_10 = () => {
  const num1 = +prompt("num1: ");
  const num2 = +prompt("num2: ");
  const num3 = +prompt("num3: ");

  alert(operadoresLogicos(num1, num2, num3));
  console.log(`Ejercicio 10:
  num1 = ${num1}
  num2 = ${num2}
  num3 = ${num3}
  ${operadoresLogicos(num1, num2, num3)}
  `);
};

///////////////////////////////////////////////////

//Ejercicio 11
// function esPrimo(numero) {
//   // Devuelve "true" si "numero" es primo
//   // De lo contrario devuelve "falso"
//   // Pista: un número primo solo es divisible por sí mismo y por 1
//   // Pista 2: Puedes resolverlo usando un bucle `for`
//   // Nota: Los números 0 y 1 NO son considerados números primos
// }

const esPrimo = (numero) => {
  let counter = 0;
  numero = Math.abs(numero);
  for (let i = 2; i <= Math.round(numero / 2); i++) {
    if (numero % i === 0) {
      counter++;
    }
  }
  return counter === 0 && numero != 0 && numero != 1 ? true : false;
};
const ejerciciosJS2_11 = () => {
  const num = +prompt("Ingrese un número: ");
  alert(esPrimo(num));
  console.log(`Ejercicio 11:
El ${num} es un número primo? => ${esPrimo(num)}`);
};

///////////////////////////////////////////////////

//Ejercicio 12
// function esVerdadero(valor) {
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí
// }

const esVerdadero = (valor) => {
  return valor ? "Soy verdadero" : "Soy falso";
};

const ejerciciosJS2_12 = () => {
  const valor = confirm(`Eres una maquina?
  Aceptar: Humano
  Cancelar: Máquina`);

  alert(esVerdadero(valor));
  console.log(`Ejercicio 12:
  Valor = ${valor} => ${esVerdadero(valor)}`);
};

///////////////////////////////////////////////////

//Ejercicio 13
// function tablaDelSeis() {
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí
// }

const tablaDelSeis = () => {
  let tabla6 = [];
  for (let i = 1; i <= 10; i++) {
    tabla6.push(6 * i);
  }
  alert(tabla6);
  console.log(`Ejercicio 13:`);
  tabla6.forEach((element, i) => {
    console.log(`6x${i + 1} = ${element}`);
  });
};

const ejerciciosJS2_13 = () => {
  tablaDelSeis();
};

///////////////////////////////////////////////////

//Ejercicio 14
// function tieneTresDigitos(numero) {
//   //Leer un número entero y determinar si tiene 3 dígitos.
//   //Escribe tu código aquí
// }

const tieneTresDigitos = (numero) => {
  if (Number.isInteger(numero)) {
    return numero > 99 && numero < 1000
      ? "Es un número de 3 dígitos"
      : "No es un número de 3 digitos";
  } else {
    return "Dato equivocado o el número ingresado no es entero. Por favor vuelve a intentarlo";
  }
};

const ejerciciosJS2_14 = () => {
  const num = +prompt(`Ingrese un número entero`);
  alert(tieneTresDigitos(num));
};

///////////////////////////////////////////////////

//Ejercicio 15
// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
// }

const doWhile = (numero) => {
  let i = 0;
  let myArray = [numero];
  do {
    myArray.push(myArray[i] + 5);
    i++;
  } while (i < 8);

  return `[${myArray}]
Valor final = ${myArray[8]}`;
};

const ejerciciosJS2_15 = () => {
  const num = +prompt("Ingrese un número: ");
  alert(doWhile(num));
  console.log(`Ejercicio 15:
Valor ingresado = ${num}
${doWhile(num)}`);
};
