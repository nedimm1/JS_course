const now = 2023;
let nedimAge = now - 2008;
let markaplierAge = now - 1989;

console.log(now - 2008 < now - 1989);
//the reson why thees two subtractions are executed before the comparison operator is beacuse JS has a well defined order of
//operator precedence
//operator precedence is an order that defines wich operators are executed first
//table for the precedence of all the diferent operators: 
// https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html