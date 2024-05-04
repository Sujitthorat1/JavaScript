
if(true){ 
    // Block scope: Variables declared with 'let' and 'const' are confined to the block.
    let a = 10; // Variable 'a' is confined to this block.
    const b = 20; // Constant 'b' is confined to this block.
    var c = 30; // Although 'var' is declared within the block, its scope extends beyond it, which is not recommended.

    // Code within this block can access variables 'a', 'b', and 'c'.
}

// Attempting to access 'a' and 'b' here would result in an error due to their block scope.
console.log(c);