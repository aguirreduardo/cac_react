/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */
let clasificaciones = [
  "Marcos",
  "Franco",
  "Agostina",
  "Leon",
  "Juan Cruz",
  "Eduardo",
];

const ejerciciosArray_1 = () => {
  alert(clasificaciones);

  console.log(`Ejercicio 1:
    Clasificados al concurso:
    [${clasificaciones}]`);
};

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//opcional ForEach (ojo tambien document.write)

const mostrarClasificacion = () => {
  let message = "Clasificaciones:" + "\n";
  clasificaciones.forEach((element) => {
    message = message + element + "\n";
  });
  alert(message);
  console.log(`Ejercicio 2:
${message}`);
};

const ejerciciosArray_2 = () => {
  mostrarClasificacion();
};

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

const ejerciciosArray_3 = () => {
  // a)
  clasificaciones[2] = "Leon";
  clasificaciones[3] = "Agostina";

  let message = "Clasificaciones:" + "\n";

  clasificaciones.forEach((element) => {
    message = message + element + "\n";
  });

  alert(message);

  console.log(`Ejercicio 3:
    a)
${message}`);

  // b)
  clasificaciones.pop();
  message = `b) Clasificaciones: \n`;

  clasificaciones.forEach((element) => {
    message = message + element + "\n";
  });
  alert(message);

  console.log(`
${message}`);

  // c)

  const hastaMarcos = clasificaciones.slice(0, 1);
  const desdeFranco = clasificaciones.slice(1, 5);

  clasificaciones = hastaMarcos;
  clasificaciones.push("Julieta");
  clasificaciones.push("Martina");
  clasificaciones = clasificaciones.concat(desdeFranco);

  message = `c) Clasificaciones: \n`;

  clasificaciones.forEach((element) => {
    message = message + element + "\n";
  });
  alert(message);

  console.log(`
  ${message}`);

  //   d)

  clasificaciones.unshift("Alicia");

  message = `d) Clasificaciones: \n`;

  clasificaciones.forEach((element) => {
    message = message + element + "\n";
  });
  alert(message);

  console.log(`
  ${message}`);
};
