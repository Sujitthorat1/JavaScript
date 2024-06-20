const coding = ['js', 'java','python','c','c++']

coding.forEach((items)=>{
    console.log(items);
})

//save values in cost
const sub = coding.forEach((items)=>{
    console.log(items);
})
console.log(sub); //output: undefined'
/* if we try to store values of coding inside sub named varibale 
then we can't able to print those values, it will say undefined, because forEach never return anything 

*/