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

console.log(me.__proto__)
console.log(Person.prototype.isPrototypeOf(me))

Person.prototype.species = "human";

console.log(me.species)

//classes

class PersonCl{
  constructor(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }

  calcAge(){
    console.log(2024 - this.birthYear)
  }
}

const me2 = new PersonCl('Nedim', 2008)

console.log(me2)

me2.calcAge()

PersonCl.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`)
}

me2.greet()

//object.create
const personProto = {
  calcAge(){
    console.log(2024 - this.birthYear)
  }
}

let me3 = Object.create(personProto)
me3.name = 'Nedim'
me3.birthYear = 2008
console.log(me3)