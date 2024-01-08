'use strict';

/* //DEFUALT PERAMATERS
const bookings = []

function bookingSeat(flight, passengerNum = 1, price = 199 * passengerNum) {
   
//    //ES5 
//    passengerNum = passengerNum || 1
//    price = price || 199 

  let booking = {
    flight, 
    passengerNum,
    price
  }
  console.log(booking)
}

bookingSeat("LH123")
bookingSeat("LH123", 3)
bookingSeat("LH123", undefined, 200)*/

/*
//Functions returning functions
function greetingFunction(greeting) {
    return function(name){
        console.log(`${greeting}  ${name}`)
    }
}

//becomes the second function/ the first way
const greet = greetingFunction('hey')
greet('Nedim')

//the second way
greetingFunction("hey")("Nedim")

*/
//same thing but with arrow functions
let greetingFunction = greeting => name =>{

 console.log(`${greeting}  ${name}`)
    
}

const greet = greetingFunction("hey")
greet("Nedim")

greetingFunction("hey")("Nedim")