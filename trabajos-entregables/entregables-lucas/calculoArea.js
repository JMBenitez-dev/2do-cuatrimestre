let readlineSync = require('readline-sync');


console.log('Calculo de area de un Triangulo');

console.log('');

function calcular(a,b){
    calcular = a*b;
    return calcular
}

let base = readlineSync.questionInt("Ingrese la base: ");
let altura = readlineSync.questionInt("Ingrese la altura: ");
let areaTriangulo = calcular(base, altura);

console.log("El área del triángulo es :"+ areaTriangulo);
