function CalcularIMC(indice){
if (indice < 19){
alert("Su resultado es inferior al peso normal")
}
else if (indice >= 19 && indice < 25){
alert ("Su resultado es peso Normal")
}
else if (indice >= 25 && indice < 29){
alert("Su resultado es superior al peso normal")
}
else{
alert("Obesidad.")
}  
}

    



alert("Bienvenido, esta pagina se dedica a calcular el indice de masa corporal.")


let pesoEnKg=0
let altura=0
let indice= 0

do{
pesoEnKg=parseInt(prompt("Ingrese su peso en kilos"))
if((pesoEnKg<20 || pesoEnKg>300 || pesoEnKg==null|| /\D/.test(pesoEnKg)))
{alert("Ingrese un numero valido") }
}while(pesoEnKg<20 || pesoEnKg>300 || pesoEnKg==null|| /\D/.test(pesoEnKg))

do{
altura=parseInt(prompt("Ingrese su altura en centimetros."))
if((altura<20 || altura>300 || altura==null|| /\D/.test(altura)))
{alert("Ingrese un numero valido.") }
}while(altura<20 || altura>300 ||altura==null|| /\D/.test(altura))
altura= altura/100

indice=parseInt((pesoEnKg/(altura*altura)))

alert("Su IMC es de " + indice)

let resultado = CalcularIMC (indice)

alert("Gracias por usar esta pagina")

