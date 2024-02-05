//selecting elements

//one/first element
document.querySelector('.header')

//all elements with this name
const allSections = document.querySelectorAll('.section--1')
console.log(allSections)

//by ID
document.getElementById('#logo')

//all elements with this tag
const allBtns = document.getElementsByTagName('button')
console.log(allBtns)

//all elements with this class
console.log(document.getElementsByClassName('btn'))