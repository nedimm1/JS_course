'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        document.querySelector('.message').textContent = "no number"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'corect number'

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'too high'
            score = score - 1;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'you lost the game'
            document.querySelector('.score').textContent = 0
        }
        
    } else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'too low'
            score = score - 1;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'you lost the game'
            document.querySelector('.score').textContent = 0
        }
    }
}

)

console.log(secretNumber)