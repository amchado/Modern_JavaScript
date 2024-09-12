'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number');
    // document.querySelector('.message').textContent = '⛔ No number'
  } else if (guess === secretNumber) {
    displayMessage('✨Corret number');
    // document.querySelector('.message').textContent = '✨Corret number'
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      // document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too high' : '📉 Too low'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☠ You lose the game');
      // document.querySelector('.message').textContent = '☠ You lose the game'
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if(guess > secretNumber){
  //     if(score > 1){
  //         document.querySelector('.message').textContent = '📈 Too high'
  //         score--
  //         document.querySelector('.score').textContent = score
  //     }else{
  //         document.querySelector('.message').textContent = '☠ You lose the game'
  //         document.querySelector('.score').textContent = 0
  //     }
  // }else if(guess < secretNumber){
  //    if(score > 1){
  //     document.querySelector('.message').textContent = '📉 Too low'
  //     score--
  //     document.querySelector('.score').textContent = score
  //    }else{
  //     document.querySelector('.message').textContent = '☠ You lose the game'
  //     document.querySelector('.score').textContent = 0
  //    }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
