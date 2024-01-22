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