//Array methodes

//1.Slice
//like with the string

const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(2))
console.log(arr.slice(1, 3))
console.log(arr.slice(-1))
console.log(arr.slice(1, -1))

//2.Splice
//slice + mutation
const arr2 = arr.splice(-2)
console.log(arr)

//3.Concat
//joins the array
const arr3 = arr.concat(arr2)
console.log(arr3)
//same as this:
const arr4 = [...arr, ...arr2]
console.log(arr4)

//4.Reverse
//speakes for itself
console.log(arr.reverse())

//5.join
//makes a string out of the array elements
console.log(arr.join(" - "))

//At methode
//used to find indexes
console.log(arr4.at(0))
//same as:
console.log(arr4[0])

//finding the last element

//instead of doing this:
console.log(arr4.length - 1)
console.log(arr4.slice(-1)[0])

//do this:
console.log(arr4.at(-1))

//works also with strings:
console.log('Nedim'.at(-1))

//forEach 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//instead of this:
for(let movement of movements){
  if(movement > 0){
    console.log(`you deposited${movement}`)
  }else{
    console.log(`you withdrew${movement}`)
  }
}

console.log("----------------------------------------------------")
//do this
movements.forEach(function(movement){
    if(movement > 0){
        console.log(`you deposited${movement}`)
      }else{
        console.log(`you withdrew${movement}`)
      }
})


//Data transformations

//Map methode
const usdToRsd = 100;

let conversion = movements.map(function(mov){
 return mov * usdToRsd
})

console.log(conversion)

//in arrow function
let arrowConversion = movements.map(mov => {
  return mov * usdToRsd
 })

console.log(arrowConversion)

//filter Methode

//instead of doing this:
let deposits = []
for(let i of movements){
  if(i > 0) deposits.push(i)
}
 
console.log(deposits)

//do this:
const depositsFilter = movements.filter(function(mov){
  return mov > 0
})

console.log(depositsFilter)

//reduce methode:
//reduces the element to a single value


/*acc: accumulator, The accumulated result of the callback function.
cur: currentValue, The current element being processed in the array.
i: currentIndex, The index of the current element being processed.
arr: array The array on which reduce was called.*/

//acc -> snowbal

const total = movements.reduce(function(acc, cur, i, arr){
  return acc + cur
}, 0)//defualt value of the acc

console.log(total)

//chaining array methodes

const depositedUsdtoRsd = movements.filter(function(mov){
  return mov < 0
}).map(function(mov, i, arr){
  console.log(mov, arr)
  return mov * usdToRsd
}).reduce(function(acc, cur){
  return acc + cur
}, 0)

console.log(depositedUsdtoRsd)

//the chain only continues if the value is an array