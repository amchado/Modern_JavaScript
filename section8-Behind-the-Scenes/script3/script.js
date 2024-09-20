'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1986 && birthYear <= 1999) {
//       const str = `Oh, and you are a millenial, ${firstName}`;

//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Arthur';
// calcAge(1989);
//
//

//

//

// Hoisting and TDZ in practice

//variables

// console.log(nome);
// console.log(job);
// console.log(yaer);

// var nome = 'Arthur';
// let job = 'developer';
// const year = 2002;

// variaveis com var podem ser chamadas antes de serem definidas, mas seram indefinidas, as variaveis com let e const não podem ser chamadas antes de serem defenidas, elas geram um erro no codigo

//

// Funcitions

// console.log(addDel(2, 5));
// console.log(addConst(2, 1));
// console.log(AddArrow(3, 1));

// function addDel(a, b) {
//   return a + b;
// }

// const addConst = function (a, b) {
//   return a + b;
// };

// var AddArrow = (a, b) => a + b;

//Funçoes declaradas com uma variavel não podem ser chamadas antes de serem definidas / funções com em variaveis declaradas com var são indefinidas se forem chamadas antes.
// funciona somente a função chamada no literel EX: function add(a,b){a + b}

// var firstName = 'Davi';

const arthur = {
  firstName: 'Arthur',
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },

  greet: function () {
    console.log(this);
    console.log(this.firstName);
  },

  // greet: () => {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // }  Arrow function não puxa o dado usando this. ele puxa o this da janela(global)
};

arthur.greet();
