//'use strict' //CORRER JAVA SCRIP EN MODO ESTRICTO

//objetos
const producto ={
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

//Object.freeze(producto);
//Cierra el objeto de modo que 
//no se le agregue mas propiedades
//no permi8te agregar, eliminar nbi modificar elementos

//agregar  propiedades de objetos, forma anterior
producto.imagen = 'imagen.jpg';
console.log(producto);

//eliminar propiedadess
delete producto.disponible;
console.log(producto);

console.log(Object.isFrozen(producto));

Object.seal(producto);
//no permite agregar ni borrar elemento, 
// pero si permite modificar elementos

producto.precio = 500;
console.log(Object.isSealed(producto));

console.log(producto);
