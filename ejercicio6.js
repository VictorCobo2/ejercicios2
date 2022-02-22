var n1 = prompt("Digite el primer valor")
var n2 = prompt("Digite el segundo valor")
let result =0
let valor = parseInt(n1)
for(let i = 0; i< n2; i++) {
    result = valor + result
}

alert("La multiplicacion es: "+result)