let languagesAlsoSpoken; 
//can be changed only inside the block where its defined, cant be hoisted
languagesAlsoSpoken = "serbian, bosnian and croatian";

const nativeLanguage = "serbian";//cannot be changed and cant be undefined, cant be hoisted

var otherLanguages;//has block and global scope depending on where it is declared
//it can also be subject to hoisting which is a  behavior in which a function or a variable can be used before declaration:

console.log(x);
var x = 'its an x'

//even though the x is not defined and given a value it still dosen't show a error, beacuse the value decleration was hoisted.
//It's as if the code is interpreted like this:
//var x; // Variable declaration is hoisted to the top
//console.log(x); // Output: undefined
//x = 10; // Variable assignment is done here

console.log(y)
let y = "its an y";
//with let you just get an error

otherLanguages = "serbian", "bosnian", "croatian"

