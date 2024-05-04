const objects = ['sujit', 'thorat', 'niraj', 'vivek', 'mane', 'atul']


//print val using for each 
objects.forEach(function(val){
    // console.log(val);
})


//Print using arrow function

objects.forEach((items)=>{
    // console.log(items);
})

//using printMe

function printMe(item, index, arr){
    // console.log(item, index, arr);
}
// objects.forEach(printMe)



//Complex oject1 (very important )

const myCoding =[
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Dart",
        languageFileName:"dart"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})