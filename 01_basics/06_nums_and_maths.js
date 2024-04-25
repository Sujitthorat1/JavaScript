
// *************************Numbers*************************

// const score = 400;
// const walletBalance = new Number(100);

// console.log(walletBalance)

// console.log(walletBalance.toString().length);
// console.log(walletBalance.toFixed(1));

// const otherNumber = 90932.934;
// console.log(otherNumber.toPrecision(6));

// const thousand = 100000;
// console.log(thousand.toLocaleString('en-IN'));
//---------Output-----------
// @Sujitthorat1 ➜ /workspaces/JavaScript (main) $ node 01_basics/06_nums_and_maths.js 
// [Number: 100]
// 3
// 100.0
// 90932.9
// 1,00,000

// *********************** Maths ************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2)) // It will return max round value
// console.log(Math.floor(4.2)) //it will return minimum round value 

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const max = 10;
const min = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);