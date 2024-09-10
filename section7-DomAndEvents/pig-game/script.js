'use strict';

const roll = Math.trunc(Math.random() * 6 ) + 1 

const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice') 

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

