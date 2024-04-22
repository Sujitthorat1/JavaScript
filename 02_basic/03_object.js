// two types of object decoration
// 1) Singleton
// 2) Object Literals



// {----Object literals----}
const mySym = Symbol("key1")

const JsUser = {
    name:"sujit",
    "full name":"Sujit thorat",
    [mySym]:"myKey1", //to refer symbol we can use square brackets
    age:21,
    location:"India",
    email:"sujit@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:['Monday', 'Saturday']
}


// console.log(JsUser.email)
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);  //Print symbol
// console.log(typeof(JsUser[mySym]));

JsUser.email="sujitthorat@google.com"
// console.log(JsUser)

// Object.freeze(JsUser); //If we add freeze on Objec then we can't change or update it
JsUser.email="sujit@yahoo.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js");
}

console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello Js,${this["full name"]}`);
}


console.log(JsUser.greeting2());