'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct number!'
console.log(document.querySelector('.message').textContent)

document.querySelector('.score').textContent = 10
console.log(document.querySelector('.score').textContent);

document.querySelector('.number').textContent = 15

document.querySelector('.guess').value = 5
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random()*20) + 1
console.log(secretNumber);
let score = 20
let highscore = 0


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)


    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number'
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = '✨Corret number'
        document.querySelector('.number').textContent = secretNumber

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = score
        }


        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = '☠ You lose the game'
            document.querySelector('.score').textContent = 0
        }
    }else if(guess < secretNumber){
       if(score > 1){
        document.querySelector('.message').textContent = '📉 Too low'
        score--
        document.querySelector('.score').textContent = score
       }else{
        document.querySelector('.message').textContent = '☠ You lose the game'
        document.querySelector('.score').textContent = 0
       }
    }


})

document.querySelector('.again').addEventListener('click', function(){


    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    console.log(secretNumber)



    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''



    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'


})