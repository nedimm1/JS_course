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

//header.prepend(message)//at the top of the header 
header.append(message)//below the header 
//header.before(message)//before header 
//header.after(message)//after header

//delating elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove()
})

//styles
message.style.backgroundColor = "black"

message.style.height = 70 + "px"

message.style.width = "110%"

document.documentElement.style.setProperty("--color-primary", 'orangered')

//Attributes
const logo = document.querySelector(".nav__logo")
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)

//non standard
console.log(logo.getAttribute("designer"))

logo.setAttribute("company", "Neds International")

console.log(logo.getAttribute("company"))