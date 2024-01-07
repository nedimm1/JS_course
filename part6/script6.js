'use strict';

const bookings = []

function bookingSeat(flight, passengerNum, price) {
   
   //ES5 
   passengerNum = passengerNum || 1
   price = price || 199 

  let booking = {
    flight, 
    passengerNum,
    price
  }
  console.log(booking)
}

bookingSeat("LH123")