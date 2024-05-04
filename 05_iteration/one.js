//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element ==5){
        // console.log("5 is the best");
    }
    // console.log(element);
}

// console.log(element); this is not accessible outside of the scope

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+"*"+j+"-"+i*j);
    }
    
}



//

let myArray = ['flash', 'batman', 'sujit'];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}
// console.log(myArray);


//break and continue

for (let i = 1; i < 20; i++) {
    if(i==5){
        console.log("5 is found !");
        //break;
        continue;
    }
    console.log(i);

    
}