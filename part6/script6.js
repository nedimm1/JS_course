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
/*
let greetingFunction = greeting => name =>{

 console.log(`${greeting}  ${name}`)
    
}

const greet = greetingFunction("hey")
greet("Nedim")

greetingFunction("hey")("Nedim")*/

//Call Aplay Bind
//Call:
//here is an object
const airSerbia = {
    name: "Air Serbia",
    iataCode: "JU",
    bookings: [],
    book(flightNum, name) {
      console.log(`${name} took a flight on the plane ${this.iataCode}${flightNum}`)

      this.bookings.push(flightNum, name)
    },
    
}

console.log(airSerbia)
//now how do i use the same method in a diferent object?

airSerbia.book(223, "Nedim Muminovic")

const euroWings = {
    name: "Euro Wings",
    iataCode: 'EW',
    bookings: [],
}

//like this:
airSerbia.book.call(euroWings, 55, "Jason Statement")

console.log(euroWings)

//Aplay
//basiclly the smae thing, but for arrays
const flightData = [554, "Rayan Renolds"]
airSerbia.book.apply(euroWings, flightData)
console.log(euroWings)

//nobody realy uses this anymore, so you can just do this: 
airSerbia.book.call(euroWings, ...flightData)