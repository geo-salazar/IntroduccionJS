//objetos
const producto ={
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

//var con propiedades de objetos, forma anterior
// const precioProducto = producto.precio;
// const disponibleProducto = producto.disponible;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(disponibleProducto);
// console.log(nombreProducto);


//Destructuring forma nueva

const {precio} = producto;
const {nombreProducto} = producto;
const {disponible} = producto;



console.log(precio);
console.log(nombreProducto);
console.log(disponible);




