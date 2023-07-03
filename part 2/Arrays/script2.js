'use strict';

//an array is an ordered collection of values. 
//It allows you to store multiple values in a single variable, forming a list-like structure. 

//instead of stroring multiple values like this:

const familyMember1 = "Dad";
const familyMember2 = 'Mom';
const familyMember3 = 'brother'

//more eficient way would be like this:

//first example of an array:

//Each value in an array is called an element, 
//and elements are separated by commas and enclosed within square brackets [].
const familyMembers = ['Dad', 'mom', 'brother'];

//second example of an array:

const y = new Array(1999, 2008, 2020)

//and now we can print all of this values at once
console.log(familyMembers);
console.log(y);

//we can also print specific values from thees arrays:
console.log(familyMembers[1], familyMembers[0])

//we can check the lenght of the array:
console.log(familyMembers.length)

//mutate(change) the value of a specific value in a array:
familyMembers[2] = 'me'//the reasone why this can be changed, even though its const, is beacuse that
//rule that says that const cant be changed only  applies to primitive values. 
//an array is not a primitive value
console.log(familyMembers)

//we can include other variables and arrays into an array:
const name = 'Nedim';
const lastName = 'Muminovic';
const age = 15;

const nedim = [name, lastName, age, familyMembers]

console.log(nedim)

//using arrays with funtions: 

const years = [2008, 2007, 2006, 2005];

const calcAge = (birthYear) => {
    return 2023 - birthYear
}

const age1 = calcAge(years[0])

console.log(age1);

//we can also make arrays out of function calls:
const ages = [calcAge(years[3]), calcAge(years[2]), calcAge(years[1])]
console.log(ages)