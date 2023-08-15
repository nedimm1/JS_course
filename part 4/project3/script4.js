'use strict';

const score0 = document.querySelector('#score--0');

const score1 = document.querySelector("score--1");

const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function(){
    let randomNum = Math.trunc(Math.random() * 6) + 1
    console.log(randomNum)
})