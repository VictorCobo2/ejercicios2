var n1 = prompt("Ingresa el primer valor")
var n2 = prompt("Ingresa el segundo valor")
let suma = 0
let v1 = parseInt(n1)+1
for(let i = v1; i < n2; i++){
    suma = i + suma
}

alert("La suma es: "+suma)
