//unir objetos


//objetos
const producto ={
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

const medidas ={
    peso: '1kg',
    medida: '1m',
}

//unir objetos sinb modificar ninguno de los dos originales
//se crea nuevo objeto
const nuevoProducto = {...producto, ...medidas}
console.log(nuevoProducto);
console.log(producto);
console.log(medidas);