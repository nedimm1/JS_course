'use strict';

//Arrow functions offer a shorter and cleaner way to write functions 
//compared to traditional function declarations or function expressions.

//declaring an arrow function:

//simplest form of an arrow function
const age = birthYear => 2023 - birthYear 

console.log(age(2008))

//in case a function has multiple parameters:
const yearsUntilRetierment = (birthYear, name) => {
    const myAge = 2023 - birthYear
    const retireYears = 65 - myAge
    return `${name} has ${retireYears} years until retierment`
}

console.log(yearsUntilRetierment(2008, 'Nedim'))