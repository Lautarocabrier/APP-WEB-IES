// 1.1 Funcion saludar
 function saludar() {
     console.log("¡Hola, bienvenido!");
 }

 saludar();


 // 1.2 Saludar a una persona
 function saludarPersona(nombre) {
     console.log(`¡Hola ${nombre}, bienvenido!`);
 }

 saludarPersona("Lautaro");


 // 1.3 Verificar si es mayor de edad
 function esMayorDeEdad(edad) {
     if (edad >= 18) {
         return true;
     } else {
         return false;
     }
 }

 let resultadoEdad = esMayorDeEdad(22);
 console.log(resultadoEdad);


 // 2. FUNCIONES FLECHA

 // 2.1 Mayor de edad con funcion flecha
 const esMayorDeEdadFlecha = (edad) => {
     if (edad >= 18) {
         return true;
     } else {
         return false;
     }
 };

 let resultadoEdadFlecha = esMayorDeEdadFlecha(17);
 console.log(resultadoEdadFlecha);


 // 2.2 Comparar dos numeros
 const compararNumeros = (numero1, numero2) => {
     if (numero1 < numero2) {
         console.log(`El número ${numero1} es menor que ${numero2}`);
     } else if (numero1 === numero2) {
         console.log(`El número ${numero1} es igual que ${numero2}`);
     } else {
         console.log(`El número ${numero1} es mayor que ${numero2}`);
     }
 };

 for (let i = 0; i < 10; i++) {
     compararNumeros(i, 5);
 }


 // 3. FUNCIONES CALLBACK

 // 3.1 Operaciones con callback
 const suma = (numero1, numero2) => {
     let resultado = numero1 + numero2;
     console.log(`El resultado de la suma es ${resultado}`);
 };

 const resta = (numero1, numero2) => {
     let resultado = numero1 - numero2;
     console.log(`El resultado de la resta es ${resultado}`);
 };

 const operacion = (numero1, numero2, callback) => {
     callback(numero1, numero2);
 };

 operacion(10, 5, suma);
 operacion(10, 5, resta);


 // 3.2 Validar que sean numeros
 const operacionValidada = (numero1, numero2, callback) => {
     if (typeof numero1 === "number" && typeof numero2 === "number"
         && Number.isFinite(numero1) && Number.isFinite(numero2)) {
         callback(numero1, numero2);
     } else {
         console.log("Debe ingresar solo números.");
     }
 };

 operacionValidada(20, 10, suma);
 operacionValidada(20, 10, resta);
 operacionValidada("hola", 10, suma);
