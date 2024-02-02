//Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀*/

let humanAge

const calcAverageHumanAge = (dogAge) => {
   humanAge = dogAge.map(function(age){
    if(age <= 3){
        return humanAge = (age - 2) * 4 + 21
    }else{
        return humanAge = (age - 2) * 4 + 10.5
    }
  }).filter(function(age){
    return humanAge = age > 18
  }).reduce(function(acc, cur, i, arr){
    return (acc + cur) / arr.length 
  }, 0)
   
  
  return averageAge.toFixed()
  
}

