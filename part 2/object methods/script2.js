'use strict';

const nedim2 = {
    name: 'nedim',
    birthYear: 2008,
    occupation: 'student',
    familyMembers: ['mom', 'dad', 'brother'],

   /* calcAge: function(birthYear){
        return 2023 - birthYear
    }*/

    calcAge: function(){
        return 2023 - this.birthYear // the 'this' keyword provides a way to access and operate 
        //on the properties and methods of the object that owns or calls the function.
    }
}

console.log(nedim2.calcAge());//we can even change the name of the function and it will work the same
//console.log(nedim['calcAge'](2008));
