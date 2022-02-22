// console.log("Digita el numero de notas");
// var Leer = process.openStdin();
// let nNotas = 0;
// let tNotas = 0;

// Leer.addListener("data", function(d) {
//     nNotas = parseInt(d)
//     for(let i = 0; i < nNotas; i++){
//         re(nNotas);
        
//     }
    
// });

// function re(notas){
//     console.log("Digita la nota:");
//     var LeerNotas = process.openStdin();
//     LeerNotas.addListener("data", function(b) {
//         tNotas = parseInt(b)
        
//     });
// }

var valor = prompt("Cuantas notas desea ingresar?")


let nNotas = parseInt(valor)
var allNotas = new Array(nNotas);
var sumNotas = 0

for(let i = 0; i <nNotas; i++){

    var notas = prompt("Digina el valor de la nota numero "+ (i+1) +":")
    let nota = parseInt(notas)+0
    sumNotas = nota + sumNotas
    
}

alert("El promedio de tus notas es: "+ sumNotas/nNotas)

