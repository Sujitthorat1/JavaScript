/* 
   Using 'var' is not recommended due to issues with variable scoping. In the example above, 
   the scope of 'var' extends beyond the block, causing potential problems in real-time projects.
*/

// Global scope
if(true){ 
    // Block scope: Variables declared with 'let' and 'const' are confined to the block.
    let a = 10; // Variable 'a' is confined to this block.
    const b = 20; // Constant 'b' is confined to this block.
    var c = 30; // Although 'var' is declared within the block, its scope extends beyond it, which is not recommended.

    // Code within this block can access variables 'a', 'b', and 'c'.
}

// Attempting to access 'a' and 'b' here would result in an error due to their block scope.
// console.log(a);
// console.log(b);

// 'c' is declared using 'var', so it's accessible outside the block.
// console.log(c);

// ***********************Output**************************
// @Sujitthorat1 ➜ /workspaces/JavaScript/03_basics (main) $ node 02_scope.js 
// 30

// Symbol for scope {}
{ }


//Nesting scope

function one(){
    const username ='sujit'
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); #this log is throw error because we can't access functions outside of the scope
   two()
}
 
// one()

if(true){
    const username="Sujit";
    if(username==="Sujit"){
        const password = " Sujit@123"
        // console.log(username+password)
    }
    // console.log(password)
} 
// console.log(password)


//---------- Interesting------------

//this is the basic function 
addOne(5)    //we can declare this before function declaration
function addOne(num){
    return num+1;
}
// addOne(5)

//this is also function but we can called it expression also
// this addTwo treat like variable that can hold functions, json etc.

//addTwo(5)   //{ we can't call expression before function declaration, It will trough the error}
const addTwo = function(num){
    return num+2;
}

addTwo(5)