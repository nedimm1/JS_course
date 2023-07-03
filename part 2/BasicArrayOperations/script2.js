'use strict';

// Arrays have built-in methods that allow you to manipulate and work with their elements
//here are some of them:

const familyMembers = ['dad', 'mom', 'brother1', 'me']

familyMembers.push('brother2'); //adds another element to the end of an array
console.log(familyMembers)

familyMembers.unshift('grandpa', 'grandma');//adds another element to the begining of an array
console.log(familyMembers)

const popped = familyMembers.pop()//removes an element fromm the end of an array
console.log(popped)//we can also print the popped value
console.log(familyMembers)

familyMembers.shift()//removes an element fromm the begining of an array
console.log(familyMembers)

console.log(familyMembers.indexOf('me'))//shows and index of the element in the array

console.log(familyMembers.includes('sister'))//checks if the element is in the array

//these are just some of the methods there are a lot more
