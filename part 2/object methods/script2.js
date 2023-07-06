'use strict';

const nedim = {
    name: 'nedim',
    birthYear: 2008,
    occupation: 'student',
    familyMembers: ['mom', 'dad', 'brother'],

    calcAge: function(birthYear){
        return 2023 - birthYear
    }
}

console.log(nedim.calcAge(2008));
console.log(nedim['calcAge'](2008));
