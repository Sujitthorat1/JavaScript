// Immediately invoked function Expression (IIFE)

// {many time there is problem occurred because of the global scope, to avoid this global scope pollution
//  we are using IIFE "(to avoid global scope pollution we used IIFE,)"}
// Immediately execution of the code


// {this is the named  iife , because we taken name for function}
(function chai(){
    console.log('DB connected');
})();
// we need to use semi colon for close the execution of the IIFE 

// {Simple IIFE OR unnamed IIFE}
( ()=>{
    console.log(`DB CONNECTED`);
})();

// {Parameterized IIFE}
( (name)=>{
    console.log(`DB CONNECTED ${name}`);
})('sujit');