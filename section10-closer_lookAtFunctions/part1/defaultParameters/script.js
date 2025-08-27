'use strict';

//////////////////////////////////////////////////////////
// Default Parameters

/*const bookings = [];

const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;

  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('Ls50');
createBooking('Ls100', 2);
createBooking('BG30', 3, 50);
createBooking('LT02', undefined, 20);
createBooking('AL50', 10, undefined);
*/

///////////How Passing Arguments Works: Value vs. Reference

const flight = 'AR1408';
const arthur = {
  name: 'Arthur Lucas',
  passport: 21995126152111,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'BR0111';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 21995126152111) {
    alert('Voo checado, tudo certo');
  } else {
    alert('Erro no passaporte');
  }
};

// checkIn(flight, arthur);
// console.log(flight);
// console.log(arthur);

const newPassport = function (person) {
  person.passport = 1000100001000;
};

// newPassport(arthur);
// checkIn(flight, arthur);
// console.log(arthur);

/////// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//High-order function
const tranformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

// tranformer('Chama os cara', upperFirstWord);
// tranformer('SOU tricoloR De COracAO', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const gretterEi = greet('Ei');
// gretterEi('Arthur');
// gretterEi('DV');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// const greet2 = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const gretterOU = greet2('OU');

// gretterOU('Arthur');
// gretterOU('German');

/////////////
//The call and apply Methods

const lufthansa = {
  airlane: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(passenNum, name) {
    console.log(
      `${name} booked a seat on ${this.airlane} flight ${this.iataCode}${passenNum}`
    );
    this.bookings.push({
      flight: `${this.airlane} flight ${this.iataCode}${passenNum}`,
      name,
    });
  },
};

// lufthansa.book(313, 'Arthur');
// lufthansa.book(237, 'LC');
// console.log(lufthansa);

const eurowings = {
  airlane: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// nao funciona
// book(23, 'hmmm');

//Call method
// book.call(eurowings, 213, 'Machado Florentino');
// console.log(eurowings);

const gol = {
  airlane: 'Gol',
  iataCode: 'GL',
  bookings: [],
};

// book.call(gol, 712, 'Thallyah Machado');

// Apply method
const flightData = [583, 'George Cooper'];
// book.apply(gol, flightData);
// console.log(gol);

// book.call(gol, ...flightData);

//bind method
//book.call(eurowings, 23, 'Sarah willians')

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookGL = book.bind(gol);

// bookEw(23, 'AL Machado');

const bookEw23 = book.bind(eurowings, 23);
// bookEw23('DV Machado');

// Woth event listeners
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.plane++;
  console.log(this.plane);
};
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTAX = (rate, value) => value + value * rate;
// console.log(addTAX(0.1, 300));

// const addVAX = addTAX.bind(null, 0.23);
// (rate, value) => value + value * 0.23;

//////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

//IEFE
(function () {
  console.log(`Isso so vai ser exacutado uma vez`);
})();

(() => {
  console.log(`Isso tambem vai ser executado somente uma vez`);
})();

///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
