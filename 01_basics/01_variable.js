const accountId= 123423;
var userEmail="Sujit@gmail.com";
let userPost="Hello";
var accountPassword ="Si#12434434"

// accountId = 2 //not allowed

userEmail="sujit@gmail.com";
accountPassword = "1212123232";
userPost="By";

console.log(accountId);

/*
  Prefer not to use var
  because of issue in block scope and functional scope  

*/
console.log([accountId, userEmail, userPost, accountPassword])