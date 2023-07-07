'use strict';

const nedim2 = {
    name: 'nedim',
    birthYear: 2008,
    occupation: 'student',
    familyMembers: ['mom', 'dad', 'brother'],
    hasDriversLiscance: false,
    typeofSchool: 'Madrassa',

   /* calcAge: function(birthYear){
        return 2023 - birthYear
    }*/

  /*  calcAge: function(){
        return 2023 - this.birthYear // the 'this' keyword provides a way to access and operate 
        //on the properties and methods of the object that owns or calls the function.
    }*/

    calcAge: function(){
      this.age = 2023 - this.birthYear
      return this.age;
    },

     
    allInfo: function(){
      return `${nedim2.name} is a ${nedim2.age}-year old ${nedim2.typeofSchool} ${nedim2.occupation}
      and he has ${this.hasDriversLiscance ? ' a ' : ' no '} drivers liscance`
    }  
    
}

console.log(nedim2.calcAge())

console.log(nedim2.age);//we can even change the name of the function and it will work the same
//console.log(nedim['calcAge'](2008))
console.log(nedim2.age)//and now i can reuse the result by just typing this
console.log(nedim2.age)
console.log(nedim2.age)

//Nedim is a 15-year old high school student, and he has a/no drivers lisance
console.log(nedim2.allInfo())