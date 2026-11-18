
// 1.1 Cargar 5 numeros
 const numeros = [];

 for (let i = 0; i < 5; i++) {
     let numero = Number(prompt("Ingrese un numero:"));
     numeros.push(numero);
 }

 console.log(numeros);


 // 1.2 Guardar solo numeros impares
 const numerosImpares = [];

 for (let i = 0; i < 5; i++) {
     let numero = Number(prompt("Ingrese un numero:"));

     if (numero % 2 !== 0) {
         numerosImpares.push(numero);
     }
 }

 console.log(numerosImpares);


 // 1.3 Convertir frutas a mayusculas con forEach
 const frutas = ["pera", "manzana", "banana", "durazno"];

 frutas.forEach((fruta, indice) => {
     frutas[indice] = fruta.toUpperCase();
 });

 console.log(frutas);


 // 1.4 Convertir frutas a mayusculas con map
 const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

 const frutasMayusculas = frutasOriginales.map((fruta) => {
     return fruta.toUpperCase();
 });

 console.log(frutasMayusculas);


 // 1.5 Filtrar frutas que contienen "na"
 const frutasFiltradas = frutasOriginales.filter((fruta) => {
     if (fruta.includes("na")) {
         return true;
     }
     return false;
 });

 console.log(frutasFiltradas);


 // 2. OBJETOSS

 // 2.1 Crear un producto
 const producto = {
     nombre: "Remera",
     precio: 15000,
     stock: 8,
     talles: ["s", "m", "l"]
 };

 console.log(producto);


 // 2.2 Arreglo de productos y stock menor a 5
 const productos = [
     {
         nombre: "Remera",
         precio: 15000,
         stock: 3,
         talles: ["s", "m", "l"]
     },
     {
         nombre: "Pantalon",
         precio: 30000,
         stock: 12,
         talles: ["s", "m", "l"]
     },
     {
         nombre: "Buzo",
         precio: 25000,
         stock: 2,
         talles: ["s", "m", "l"]
     },
     {
         nombre: "Campera",
         precio: 50000,
         stock: 15,
         talles: ["s", "m", "l"]
     }
 ];

 productos.forEach((producto) => {
     if (producto.stock < 5) {
         console.log(producto);
     }
 });


 // 2.3 Aplicar descuento del 10 porcientoo con map
 const productosDescuento = productos.map((producto) => {
     return {
         ...producto,
         precio: producto.precio * 0.9
     };
 });

 console.log(productosDescuento);


 // 2.4 Filtrar productos con stock mayor a 10
 const productosStock = productos.filter((producto) => {
     return producto.stock > 10;
 });

 console.log(productosStock);
