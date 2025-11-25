//Arreglos o Arrays
// carrito de compras

const numeros = [10,20,30,40,50];
console.table(numeros);


const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
console.table(meses);

const arreglo = ['Hola', 10, true, 'si', null, {nombre: 'geo', trabajo: 'programador'}, [1,2,3]];
console.table(arreglo); //.table ve la info en tabla

//acceder valors de unn arreglo

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[20]);

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
console.log(arreglo[3]);

//iterador For

meses.forEach(function(mes){
    console.log(mes);
});

meses.forEach(mes => console.log(mes));

//conocer la extensión de un arreglo
console.log(numeros.length);
console.log(meses.length);
console.log(arreglo.length);

//Agregar elementos .push al final del arreglo

numeros.push(60,70,80); //no modificar arreglos originales
console.table(numeros);

meses.push('Julio');
console.table(meses);

numeros.unshift(-10,-20,-30);//.unshift agrega al principio
console.table(numeros);

//eliminar elementos al final
meses.pop();
console.table(meses);

//eliminar elementos al principio
numeros.shift();
console.table(numeros);

meses.splice(2,1);
console.table(meses);

//todo lo anterior modifica el areglo riginal, casi no se usa
//mejor hacer otro

const nuevoarreglo = [...meses, 'agosto'];
console.table(nuevoarreglo);

const nuevoarreglo1 = ['Diciembre',...meses ];
console.table(nuevoarreglo1);