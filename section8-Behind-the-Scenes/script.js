'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1986 && birthYear <= 1999) {
      const str = `Oh, and you are a millenial, ${firstName}`;

      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Arthur';
calcAge(1989);
