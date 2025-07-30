'use strict';

//////////////////////////////////////////////////////////
// Default Parameters
const bookings = [];

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
