//template string

let nick = "destroyer"
console.log(`I am the ${nick}`);

//operador ternário

let idade = 19;

if (idade >= 18) {
    console.log("maior de idade");
}
else {
    console.log("és menos de idade");
}

function age(years) {
    return years >= 18 ? 'maior de idade' : 'menor de idade'
}
console.log(age(17));

//arrow funcions
const divide = (a, b) => a/b
console.log(divide(2,5));