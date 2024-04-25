const user = {
    username: "sujit",
    price: 899,

    //for refer current context(means current scope of object) use this keyword
    //"this" refer current context
    welcomeMessage: function () {
        // console.log(`${this.username}, welcome sujit`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username="thorat"
// user.welcomeMessage()

/***Output1******

@Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
sujit, welcome sujit
{
  username: 'sujit',
  price: 899,
  welcomeMessage: [Function: welcomeMessage]
}
thorat, welcome sujit
{
  username: 'thorat',
  price: 899,
  welcomeMessage: [Function: welcomeMessage]
}

 */

// console.log(this)  //if we call only this log then it will return empty scope "{}"
// {inside nodejs machine engine it will show the empty scope"{}" but inside the browser log it will show {global, window, ....etc}}



// -------ex2------------


function chai(){
    // let username = 'sujit'
    // console.log(this.username);
}
chai()
// ----------output--------
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
// undefined

// ------ex3-----------

// const chai = function(){
//     let username = 'sujit'
//     console.log(this.username);
// }
// chai()
// ----------output--------
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
// undefined

// const chai = () => {
//     let username = 'sujit'
//     // console.log(this);
// }
// chai()
// ----------output--------
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
// {}


// {Explicit return -> we need to user {} brackets and use return keyword for explicit function}
// const addTwo=(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,6))
// ----------output--------
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
// 9



//implicitly return
//if we use curly brackets ("{}")then we need to use return keyword
// const addTwo =(num1, num2) => num1+num2
// console.log(addTwo(3, 4));
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));



// const addTwo =(num1, num2) => (username:"sujit") we can't return object like this



//to return object we can write code like this
const addTwo =(num1, num2) => ({username:"sujit"})
// console.log(addTwo(12, 14));
// output
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 03_arrow.js 
// { username: 'sujit' }




// const myArr =[2,3,5,5]
// myArr.forEach()











