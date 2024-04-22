const mumbai= ['hardik', 'rohit','jasprit','sujit'];
const chennai = ['Dhoni', 'jaddu', 'mukesh'];

// mumbai.push(chennai);
// console.log(mumbai)


//using concat
const resultAfterConcat = mumbai.concat(chennai);

// console.log(resultAfterConcat);


//using spread
const newTeam = [...mumbai,...chennai];
// console.log(newTeam);


//flat

const newArr = [1,2,3,[4,5,6],7,[8,9,[10,11,14]]];
const realanotherArr = newArr.flat(Infinity);
// console.log(realanotherArr)


//conver from of array

console.log(Array.isArray('sujit'));
console.log(Array.from("Sujit"));

//intersting case {important in interview perspective}
console.log(Array.from({name:"sujit"}))

//of array


const first = 100;
const sec = 400;
const third = 500;

console.log(Array.of(first,sec,third))


