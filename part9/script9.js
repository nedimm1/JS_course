//selecting elements

//one/first element
const header = document.querySelector('.header')

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


//creating and inserting elements
const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML =  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message)//at the top of the header 
header.append(message)//below the header 
header.before(message)//before header 
header.after(message)//after header