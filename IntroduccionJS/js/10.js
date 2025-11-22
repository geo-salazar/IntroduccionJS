//const nombreProducto = 'Monitor 20 Pulgadas';
//const precio= 300;
//const disponible = true;

const producto ={
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}
console.log(producto);
console.log(producto.precio);//para acceder a las propoiedades se usa varobjeto + . + propidad
console.log(producto.disponible);
console.log(producto.nombreProducto);

console.log(producto['precio']); //es lo mismo que con .
console.log(producto['disponible']);
console.log(producto['nombreProducto']);

//console.log(nombreProducto);
//console.log(precio);
//console.log(disponible);

//console.log(typeof nombreProducto);
//console.log(typeof precio);
//console.log(typeof disponible);

const cliente ={
    nombre: 'Georgina',
    apellido : 'Salazar',
    casada : true,
}

console.log(cliente);
console.log(cliente.nombre);
console.log(cliente.apellido);
console.log(cliente.casada);

console.log(`Cliente: ${cliente.nombre} ${cliente.apellido} Casada: ${cliente.casada}`);

//puedes agregar o quitra info de un objeto

producto.imagen = 'imagen.jpg';
console.log(producto);


//eliminar propiedadess
delete producto.disponible;
console.log(producto);
