'use strict';

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
bookingSeat("LH123", undefined, 200)