//console.log("hola desde node");

let readlineSync = require('readline-sync');
//let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
//console.log(alturaPersona);

let mensajeUsuario = [];

for (let i=0; i<3; i++){
    mensajeUsuario[i] = readlineSync.question("escribe un mensaje:");
};
for (let i=0; i<mensajeUsuario.length; i++){
    console.log("escribió el siguiente mensaje:" +mensajeUsuario[i]);
};
