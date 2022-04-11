//string
var myName = "nascimento"
//number
var age = 22
//float
var height = 1.86

//null = objeto vazio
//undefined = dado não definifo

//boolean
var isTheGreatest = true

//objeto array e function

var person ={
    "name": "Nascimento",
    "idade": 22
}

var students = ["Nascimento", "Wallace", "Diogo"]

function sum (a, b) {
    return a + b
}

//para saber o tipo de dado
console.log(typeof person);


//operadores
//+ mais - menos / divisão * multiplicção % resto da divisão
//de comparação -> = atribuição == igual === tipo igual ! negação || ou && e

//estruturas condicionais

var num = 1

if (num == 1) {
    console.log("num é igual à 1");
}
else if (num == 2) {
    console.log("num é igual à 2");
}
else {
    console.log("não é 1 e nem 2");
}

var mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
    case "janeiro":
        console.log("mes 1");
    default:
        console.log("do mes 3 pra frente");
        break;
}
