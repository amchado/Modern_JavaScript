'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

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

//Split and Join
console.log('agora+eu+vou+ir+dormir'.split('+'));
console.log('Arthur Lucas'.split(' '));

const [firstName, lastName] = 'Arthur Lucas'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessi ann smith davis');
capitalizeName('arthur lucas machado f.');

//padding
const message = 'Go to gate 25!';
console.log(message.padStart(30, '+').padEnd(40, '+'));
console.log('Arthur'.padStart(10, '+').padEnd(20, '+'));

//repeat
const flu = 'FLUMINENSE O MAIOR ';
console.log(flu.repeat(5));
/*
const airline = 'Tap Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLocaleLowerCase());

//Fix capitalization in name
const passenger = 'ArThuR';
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passenger, passengerLowerCase, passengerCorrect);

//comparing emails
const email = 'amchado@lucas.com';
const loginEmail = ' AmchadO@Lucas.Com ';

// const emailLower = email.toLowerCase();
// const emailTrimmed = emailLower.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceBR = '230,50$';
const priceGB = priceBR.replace('$', '₤').replace(',', '.');
console.log(priceGB);

const announciment =
  'Atenção passageiros, o portão ja esta aberto para embarque, por favor se dirajam ao portão 30C';

console.log(announciment.replace('portão', 'entrada'));
console.log(announciment.replaceAll('portão', 'entrada'));
console.log(announciment.replace(/portão/g, 'entrada'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('Has part to boing family');
}

const airline = 'Tap Air Portugal';
const plane = 'A238';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log('B325'.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('r'));
//indexOf é sensitive, tem que acompanhar o Caps das letras  ⬇⬇⬇⬇⬇ vai dar undefined por estar com letra minuscula
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, 3));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E is are middle seats
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log('Your seat are on middle');
  } else {
    console.log('Your seat is not on the middle');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('12C');
checkMiddleSeat('11E');
checkMiddleSeat('5E');
checkMiddleSeat('2B');
checkMiddleSeat('9A');

console.log(new String('Arthur'));
console.log(typeof new String('Arthur'));
console.log(typeof new String('Arthur').slice(1));

const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 😃'],
  [false, 'Try again!'],
]);

console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz question
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answe'));
console.log(answer);

// console.log(
//   answer === 3
//     ? console.log(question.get(true))
//     : console.log(question.get(false))
// );
console.log(question.get(question.get('Correct') === answer));

//convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
3;


const rest = new Map();
rest.set('name', 'Italianinho massas');
rest.set(1, 'Rua francisca, RJ');
rest.set(2, 'Avenida Braza, BXD');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set(document.querySelector('h1'), 'Heading');
// rest.clear()
rest.set([1, 2], 'test');
console.log(rest);
console.log(rest.size);


const orderSets = new Set([
  'pizza',
  'pizza',
  'risotto',
  'pizza',
  'pasta',
  'pasta',
]);
console.log(orderSets);

console.log(new Set('Arthur'));

//propriedades
console.log(orderSets.size);
console.log(orderSets.has('pizza'));
console.log(orderSets.has('ervilha'));
orderSets.add('Garlic bread');
orderSets.delete('pasta');
// orderSets.clear()
console.log(orderSets);

for (const order of orderSets) {
  console.log(order);
}

//exemplo
const staff = [
  'jogador',
  'tecnico',
  'goleiro',
  'goleiro',
  'jogador',
  'jogador',
  'jogador',
];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(
    'jogador',
    'tecnico',
    'goleiro',
    'goleiro',
    'jogador',
    'jogador',
    'jogador'
  ).size
);

console.log(new Set('Arthur').size);

//property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//Entire objects
const entires = Object.entries(openingHours);
// console.log(entires);

for (const [key, { open, close }] of entires) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

// console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.tue?.open);

for (const days of weekdays) {
  const open = restaurant.openingHours[days]?.open ?? 'closed';
  console.log(`${days}, open at ${open} hrs.`);
}

//Method

console.log(restaurant.order?.(0, 1) ?? 'Method not exist');
console.log(restaurant.ordersandwish?.(0, 1) ?? 'Method not exist');

//Arrays
const array1 = [{ name: 'Arthur', number: 25, school: 'Caic' }];

console.log(array1[0]?.name ?? 'array empty');
console.log(array1[1]?.name ?? 'array empty');


console.log(restaurant);


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

for (const [el, i] of menu.entries()) {
  console.log(`${el + 1}: ${i}`);
}
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }


//Nulish coalescing operator
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//

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

*/
