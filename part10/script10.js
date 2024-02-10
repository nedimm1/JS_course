'use strict'

//constructors
//a way of making Objects 

function Person(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

const me = new Person('Nedim', "Muminovic")

console.log(me)