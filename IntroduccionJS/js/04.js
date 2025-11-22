// 3 formas de crear un string

const producto ='Monitor HD 20"'; // ésta es la mas común
const producto1 ="Monitor HD 20 pulgadas "; // con comillas dobles o sencillas
const producto4 ="Monitor HD 20 pulgadas \" "; // para usar dos comillas dobles y no de error se pone \"
const producto2 = String('Monitor HD 30"');
const producto3 = new String('Monitor HD 50"'); //con new se convierte en un objeto
const tweet ='aprendiendo JavaScript con el curso de Desarrollo Web'; // ésta es la mas común

console.log(producto.length);
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);

console.log(typeof producto); //typeof sirve para ver el tipo de variable
console.log(typeof producto2);
console.log(typeof producto3);


// método  .length permite ver la extensión
console.log(tweet.length); 


// Indexof (retorna posición)
console.log(tweet.indexOf('JavaScript')); 
console.log(producto2.indexOf('Tablet')); // sino está devuelve -1

//Includes (retorna true o false)
console.log(tweet.includes('JavaScript')); 
console.log(producto2.includes('Tablet')); // sino está devuelve -