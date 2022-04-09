console.log("Hello World")
var MyName = "Nascimento" ;
console.log(MyName)
let idade = 22
const altura = 1.86
console.log(typeof MyName)
//Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo.
//As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
//As variáveis de const não podem ser atualizadas nem declaradas novamente
//Let se usa quando tu vai variar depois
//const não muda

//operadores
//== verifica se variáveis são iguais
//=== verifica se o tipo das variáveis são iguais
//!= diferente
//!== diferente (com tipo)
//> maior
//< menor
//>= maior ou igual
//<= menor ou igual
//&& e
//|| ou
//! negação, faz o verdadeiro virar falso

//var person {
    //"name" = "Nascimento"
    //"age" = "22"
//}

//function Sum (num_a, num_b{
//    return num_a + num_b
//}

let x = 4

if (x>3) {
    console.log(x + " é maior que três")
}
else {
    console.log(x + " não é maior que três");
}

//class

class book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return 'estou lendo ${this.title}'
    }
}

let book = new book ("Ação Humana", "Ludwig Von Mises", 1400)

console.log(book.read);


