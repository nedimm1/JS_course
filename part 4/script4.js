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
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'too high'
        score = score - 1;
        document.querySelector('.score').textContent = score
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'too low'
        score = score - 1;
        document.querySelector('.score').textContent = score
    }
}

)

console.log(secretNumber)