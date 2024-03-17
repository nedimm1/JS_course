
export const name = 'Nedim'
export const surname = 'Muminovic'
export const age = 16

const randomNumber = 324342
const secondRandomNumber = 3434

export {randomNumber as randomNum, secondRandomNumber as randomNum2}

export const calcAge =  function(birthYear){
  console.log(`you are ${2024 - birthYear} years old`)
}