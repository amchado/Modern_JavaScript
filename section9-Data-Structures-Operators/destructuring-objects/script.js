'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} to ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Rua tenente Manoel',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(name, openingHours, categories);
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variebles
let a = 111;
let b = 999;
const obj = { a: 27, b: 31, c: 55 };
// Para retribuir o valor de uma variavel com o valor de um objeto, precisa envolver a operação em parenteses primeiro.
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
