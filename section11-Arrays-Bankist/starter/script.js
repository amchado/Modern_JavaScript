'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  containerMovements.innerHTML = ' ';

  movement.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }  ${type}</div>
          <div class="movements__value">${move}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// LECTURES
/////////////////////////////////////////////////
/*
//// Slice
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

///// Splice
arr.splice(-1);
console.log(arr);
arr.splice(1, 3);
console.log(arr);

////// Reverse
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'i', 'h', 'g'];
console.log(arr2.reverse());
console.log(arr2);

/////Concat
const letters = arr.concat(arr2);
console.log(letters);

////// Join
console.log(letters.join(' - '));

///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Arthur'.at(0));
console.log('Arthur'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movimento ${i + 1}: Você depositou ${movement}`);
  } else {
    console.log(`Movimento ${i + 1}: Você retirou ${Math.abs(movement)}`);
  }
}

console.log(`--------- FOREACH ----------`);

movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movimento ${index + 1}: Você depositou ${movement}`);
  } else {
    console.log(`Movimento ${index + 1}: Você retirou ${Math.abs(movement)}`);
  }
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, i, map) {
  console.log(`${i}: ${value}`);
});

const unique = new Set(['USD', 'ER', 'ER', 'BR', 'USD']);
unique.forEach(function (value, i, map) {
  console.log(`${i}: ${value}`);
});


///////// Coding Challenge #1
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ges from that copied array (because it's a bad practice to mutate function parameters)

////////// MINHA SOLUCAO
const julia = [9, 16, 6, 8, 3];
const juliaCorrect = julia.slice(0, -2);
const kate = [10, 5, 6, 1, 4];
const arrBoth = juliaCorrect.concat(kate);

const checkDogs = function (dogsJulia, dogsKate) {
  arrBoth.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs(juliaCorrect, kate);

const checkDogs2 = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice();
  dogsJuliaCorrect.splice(0, 1);
  dogsJuliaCorrect.splice(-2);
  const dogs = dogsJuliaCorrect.concat(dogsKate);
  dogs.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


const eurTousd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const moveUSD = movements.map(function (move) {
  return move * eurTousd;
});

console.log(movements);
console.log(moveUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
///////////// Filter Method

const deposits = movements.filter(function (move) {
  return move > 0;
});
console.log(movements);
console.log(deposits);

const withdraws = movements.filter(function(mov) => mov < 0)
console.log(withdraws);


///////// reduce method

//////////// acumulator ----> snowball
const balance = movements.reduce(function (acc, cont, i, arr) {
  // console.log(`Interaction ${i}: ${acc}`);
  return acc + cont;
}, 0);
console.log(movements);
console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
