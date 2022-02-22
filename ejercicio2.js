var valor = prompt("Digita un numero de tres dijitos")
numero = parseInt(valor)
if(numero > 99 && numero <= 999){
    inverso = valor.split('').reverse().join('')
    alert("El numero inverso es: "+inverso)
}else{
    alert("No es valido el numero ingresado, intentalo de nuevo.")
}