var n1 = prompt("Ingresa el primer valor")
var n2 = prompt("Ingresa el segundo valor")
var op = prompt("Digita la operacion que deseas (+,-,* o /)")
if(op === '+'){
    sum = parseInt(n1)+parseInt(n2)
    alert("La suma es: "+ sum)
}else if(op === '-'){
    alert("La resta es: "+ (n1-n2))
}else if(op === '*'){
    alert("La multiplicacion es: "+ n1*n2)
}else if(op === '/'){
    if(n2 === '0'){
        alert("No se puede dividir entre 0")
    }else{
        alert("La division es: "+ n1/n2)
    }
    
}else{
    alert("Valor no valido")
}