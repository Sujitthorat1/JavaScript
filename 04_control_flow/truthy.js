const username="sujitthorat123"
if(username){
    // console.log("Got user name",username);
}else{
    // console.log("Don't have user name");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truth value
// "0" , 'false', " ", [], {}, function(){}, 

// const userMail =""
// if(userMail.length ===0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
}


//NUllish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
// console.log(val1);
// o/p
// @Sujitthorat1 ➜ /workspaces/JavaScript/04_control_flow (main) $ node truthy.js 
// 5
let val2;
// val2 = null??20
// val2 = undefined ?? 15
// val2 = null ?? 10 ?? 20
// console.log(val2);


// *****Ternary Operator*****
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80"): console.log("More than 80");;