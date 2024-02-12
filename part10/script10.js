'use strict'

//constructors
//a way of making Objects 

function Person(firstName, birthYear){
  this.firstName = firstName
  this.birthYear = birthYear
}

const me = new Person('Nedim', 2008)

console.log(me)

const jeff = "jeff"

console.log(jeff instanceof Person, me instanceof Person)

//prototype

Person.prototype.calcAge = function(){
  console.log(2024 - this.birthYear)
}

me.calcAge()