let readlineSync = require ('readline-sync');
// for ingreso de tiempo de vueltas
let vueltas = [];
for (let i=1; i<5; i++){
    vueltas[i] = readlineSync.questionInt ("Ingresar el tiempo de la vuelta N " + [i]  + " en minutos: ");
};

//suma las vueltas con el metodo reduce
const sumarVueltas = vueltas.reduce(
    (previusValue, currentValue) => previusValue + currentValue,
    );
console.log("--------------------------------------------------")
console.log(" El tiempo total de las vueltas es: " +sumarVueltas);
console.log("--------------------------------------------------")

// promedio de vueltas

const promedioVueltas = sumarVueltas / 4;

console.log("--------------------------------------------------")
console.log(" El promedio del tiempo total es: " +promedioVueltas);
console.log("--------------------------------------------------")