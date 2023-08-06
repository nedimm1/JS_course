'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1

let highScore = 0;

function newSN(){
    return secretNumber = Math.trunc(Math.random() * 20) + 1
}

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        document.querySelector('.message').textContent = "no number"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'corect number'
        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
             
        }

    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : 
            'too low'
            score = score - 1;
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('body').style.backgroundColor = '#fa2d2d'

            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.message').textContent = 'you lost the game'
            document.querySelector('.score').textContent = 0

            document.querySelector('.number').textContent = secretNumber;
        }
    } 
    
    }

)


 

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
     newSN()
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Start guessing...'
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
})

console.log(secretNumber)