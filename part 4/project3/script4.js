'use strict';


const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');

const score1 = document.querySelector("score--1");

const curentScore0EL = document.getElementById('current--0')

const curentScore1EL = document.getElementById('current--1')

const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0]

let activePlayer = 0;

let currentScore = 0

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function () {
    let randomNum = Math.trunc(Math.random() * 6) + 1
    console.log(randomNum)

    diceEL.classList.remove('hidden')
    diceEL.src = `number-${randomNum}.PNG`

    if (randomNum !== 1) {
        currentScore += randomNum
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        curentScore0EL.textContent = curentScore
    } else {
       switchPlayer()
    }
})

btnHold.addEventListener('click', function () {


    scores[activePlayer] += currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active')
    }else{
       switchPlayer()
    }
})