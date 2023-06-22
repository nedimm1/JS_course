'use strict';

//The main difference between function declarations and function expressions in JavaScript lies in how they are defined 
//and how they are treated by the JavaScript interpreter

//function  declarations:

//function  declarations are subjects to hoisting wich means that we can call a function before its even declared:

const age1 = calcage1(2008);

function calcage1(birthYear) {
  return 2023 - birthYear
}

console.log(age1)

//function expressions:

//Function expressions involve assigning a function to a variable or a constant. 
//They don't require a function name and are typically assigned using the assignment operator (=) within a variable declaration.
//they are not subjects to hoisting

const calcage2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcage2(2008);

console.log(age2)

