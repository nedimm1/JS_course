'use strict';

//n JavaScript, an object is a complex data type 
//that allows you to store and organize related data and functionality together.

const me = [
    'nedim',
    2023 - 2008,
    'student',
    ['mom', 'dad', 'brother']
]

//arrays store homogeneous data and have numeric indices

const nedim = {
    name: 'nedim',//these are properties 
    age: 2023 - 2008,//Properties define the data or behavior of an object.
    occupation: 'student',
    familyMembers: ['mom', 'dad', 'brother']
}
//while objects properties have meaningful names and can store any type of value (PRIMITIVE values)

//console logging the object
console.log(nedim)

//there are tow ways we can log certian properties to the console:

//1.Dot Notation:
console.log(nedim.name)

//2.Brackets notation:

console.log(nedim['name'])

//we can also add another property to the object

nedim.lastName = 'muminovic';

nedim['twitter'] = '@familijaNM'

const interestedIn = prompt('what would you like to know about Nedim?')

if(nedim[interestedIn]){

  console.log(nedim[interestedIn])

}else{
    console.log('cant provide you that information')
}
