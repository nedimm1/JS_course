'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector('.close-modal')
//using querySelectorAll helps us in case there are more classes with the same name 
const btnsShowModal = document.querySelectorAll('.show-modal');
//using the normal queryselector would just console log the first element with that class

const openModal = function () {
    console.log('button clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(key){
    console.log('a key was pressed')
    console.log(key)
})