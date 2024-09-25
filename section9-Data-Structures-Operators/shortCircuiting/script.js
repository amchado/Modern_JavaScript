'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(othersIngredients);
  },
};

console.log('----OR-----');
//Use any data type, return any data type, short-circuiting
console.log(10 || 'jonas');
console.log('' || 'jonas');
console.log(undefined || null);

console.log(null || undefined || '' || 0 || 'Arthur' || true || 10);

// restaurant.numGuests = 20
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 15;
console.log(guest2);

console.log('----AND----');

console.log('arthur' && 20);
console.log(null && 20);

console.log('arthur' && 20 && undefined && true && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('calabresa', 'queijo');
}

restaurant.orderPizza &&
  restaurant.orderPizza('portuguesa', 'bacon', 'azeitona');
//DESTRUCTION

// restaurant.orderPizza('calabresa', 'queijo', 'bacon', 'cebolas');

// restaurant.orderPizza('Portuguesa');

// //Spread because on Right side of =
// const arr = [1, 2, ...[4, 5]];
// console.log(arr);

// //Rest beacause on Left side of =
// const [first, second, ...others] = [1, 2, 3, 10, 12];
// console.log(others);

// const [pizza, , risoto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risoto, othersFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //2) functions
// const add = function (...numbers) {
//   let sm = 0;
//   for (let i = 0; i < numbers.length; i++) sm += numbers[i];
//   console.log(sm);
// };

// add(2, 3);
// add(3, 2, 10);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [2, 22, 12];
// add(...x);
// const arr = [5, 6, 7];
// const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newBadArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const copyMenu = [...restaurant.mainMenu];

// //join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //interables: arrays, strings, maps, sets. NOT functions
// const str = 'Arthur';
// const letters = [...str, '', 'R.'];
// console.log(letters);
// console.log(...str);

// //Real-workd example
// const ingredients = [
//   //   prompt('Lets make pasta! Ingrediente 1?'),
//   //   prompt('Ingredient 2?'),
//   //   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newReustaurant = { founder: 'Arthur', ...restaurant, foundedIn: 1992 };
// console.log(newReustaurant);

// const reustaurantCopy = { ...restaurant };
// reustaurantCopy.name = 'Pizaria Toscana';
// console.log(reustaurantCopy.name);
// console.log(restaurant.name);
