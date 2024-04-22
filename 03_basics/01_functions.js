//functions
// whatever code written that code combined in the package called is the function
// whenever it require that time we can simply call this function
function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("j");
    console.log("i");
    console.log("t");
}
//function reference - sayMyName
//actual function calling 
// sayMyName()

// //{parameters (num1,  num2)}
// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNum(22, 5) // {aruguments (22, 5)}

//____________normal function_____________ 

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

// const result = addTwoNum(2,4);
// console.log(result) //this result value is undefined
//here result = undefined



//___________return function__________

function addTwoNum(num1, num2) {
    // let result = num1+num2;
    return num1 + num2;
}


const result = addTwoNum(7, 8);
// console.log(result);


function loginUserMessage(username = "Sujit") {
    if (!username) {
        return console.log("user is undefined..!")
    }
    return `${username} just logged in..`
}


// console.log(loginUserMessage())
// console.log(loginUserMessage("thorat"))




//rest operator (spred operator but here it is rest perator)

function calculatoCartPrice(...num1) {
    return num1
}
// console.log(calculatoCartPrice(200,300,400,600));

/******************************Output**********************/
// @Sujitthorat1 ➜ /workspaces/JavaScript (main) $ node 03_basics/01_functions.js 
// [ 200, 300, 400, 600 ]

// function calculatoCartPrice(val1, val2,...num1){
//     return num1
// }
// console.log(calculatoCartPrice(200,300,400,6000,3000));


/******************************Output**********************/
// @Sujitthorat1 ➜ /workspaces/JavaScript (main) $ node 03_basics/01_functions.js 
// [ 400, 600 ]



const user = {
    username: "sujit",
    price: 200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "thorat",
//     price: 600
// })


const myNewArray = [200, 300, 400, 80];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([400,223,232,33,12]));