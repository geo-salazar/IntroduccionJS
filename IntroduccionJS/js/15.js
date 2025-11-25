//Array methods
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
console.table(meses);


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 50000 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//forEach

meses.forEach(function(mes){
    if(mes == 'Marzo')
    console.log('Marzo si existe');
});

//conocer la extensión de un arreglo
console.log('el arreglo tiene ' + meses.length);

//Includes saber si incluye el elemento. para arreglo plano
const resultado = meses.includes('setiembre');
console.log(resultado);

let resultado2 = carrito.includes('celular');
console.log(resultado2);
//includes no sirve con objetos

//some ideal para objetos
resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});
console.log(resultado2);

//REduce . Ej suma carrito de compras
resultado2 = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);

console.log(resultado2);

//filter

resultado2 = carrito.filter(function(producto){
    return producto.precio > 400;
});
console.log(resultado2);

resultado2 = carrito.filter(function(producto){
    return producto.nombre == 'Celular';
});
console.log(resultado2);

resultado2 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});
console.log(resultado2);