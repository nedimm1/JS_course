'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector('.close-modal')
//using querySelectorAll helps us in case there are more classes with the same name 
const btnsShowModal = document.querySelectorAll('.show-modal');
//using the normal queryselector would just console log the first element with that class

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', function(){
        console.log('button clicked')
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})