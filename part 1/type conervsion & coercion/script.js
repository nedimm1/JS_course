//type conversion is when we manually converte one type to another
//type coercion is when javascript atomatically converts types behind the scenes when its nesecery

//type conversion:
let num = "2008";

console.log(Number(num), num);

console.log(num + 15);

console.log(Number(num) + 15);

console.log(String(25), 25);


//type coercion:
console.log("20" + "20" - 12);

console.log('20' / '5');

let n = '1' + '1';
n = n - 1;

console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean('me'))
console.log(Boolean({}))
console.log(Boolean(''))
