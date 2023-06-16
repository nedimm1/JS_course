const name = "Nedim";

const occupation = "student";

const schoolName = "Madrasa in Novi pazar";

const currentYear = 2023;

const birthyear = 2008;

//instead of combining strings and variables like this:
console.log("hi i am " + name, ", i am a " + occupation, "at a " + schoolName, ", and i am " + (currentYear - birthyear), "years old");

//a more simpler solution would be to use a template literal:
console.log(`hi i am ${name}, i am a ${occupation} at a ${schoolName}, and i am ${currentYear - birthyear} years old`)

//with template literals we can write a more normal looking string and insert varaibles in it
//you can also write a normal string like this

//also, instead of writing a string with multiple lines 
console.log("a\n\sentance\n\with\n\spaces")
// /n = new line

//with a template literal you can write it like this:
console.log(`a
sentance
with
spaces`)