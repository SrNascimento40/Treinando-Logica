const Nascimento = {
    name: "Nascimento",
    age: "22",
    eCasado: false,
};

const people = ["Nascimento", "Maria", "Jose"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//array.push(valor é adicionado no final do array)

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}