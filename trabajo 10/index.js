// 1.1 Mayor o menor de edad
 let edad = 22;

 if (edad >= 18) {
     console.log("Es mayor de edad");
 } else {
     console.log("Es menor de edad");
 }

 // 1.2 Numero par o impar
 let numero = 8;

 if (numero % 2 === 0) {
     console.log("El número es par");
 } else {
     console.log("El número es impar");
 }

 // 1.3 Nota
 let nota = 8;

 if (nota < 4) {
     console.log("Reprobado");
 } else if (nota <= 7) {
     console.log("Aprobado");
 } else {
     console.log("Excelente");
 }


 // 2. BUCLES

 // 2.1 Numeros del 1 al 10
 for (let i = 1; i <= 10; i++) {
     console.log(i);
 }

 // 2.2 Numeros del 10 al 1
 for (let i = 10; i >= 1; i--) {
     console.log(i);
 }

 // 2.3 Par o impar con 20 iteraciones
 for (let i = 0; i < 20; i++) {
     if (i % 2 === 0) {
         console.log("El número es par");
     } else {
         console.log("El número es impar");
     }
 }

 // 2.4 Par o impar mostrando el numero
 for (let i = 0; i < 20; i++) {
     if (i % 2 === 0) {
         console.log(`El número ${i} es par`);
     } else {
         console.log(`El número ${i} es impar`);
     }
 }
