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
//How Passing Arguments Works: Value vs. Reference

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

newPassport(arthur);
checkIn(flight, arthur);
console.log(arthur);
