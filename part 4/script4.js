'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if(!guess){
        document.querySelector('.message').textContent = "no number"
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'corect number'
    }
})

console.log(secretNumber)