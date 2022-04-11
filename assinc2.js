
//estruturas de repetição

var boxers = ["Tyson", "Ali", "Canelo", "Marciano"];

for (var n = 0; boxers.length > n; n++) {
    console.log(boxers[n]);
}

var i = 1;

do {
    console.log(i);
    i++
}    while (i<=10);

function sayHello(message) {
    console.log("\nHello " + message);
}

sayHello("Nasci")

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