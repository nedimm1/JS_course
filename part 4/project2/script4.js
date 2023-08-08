'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector('.close-modal')
//using querySelectorAll helps us in case there are more classes with the same name 
btnsShowModal = document.querySelectorAll('.show-modal');
//using the normal queryselector would just console log the first element with that class name
console.log(btnsShowModal)