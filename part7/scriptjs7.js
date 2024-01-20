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