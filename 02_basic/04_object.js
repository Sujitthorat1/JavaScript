// const tinderUser = new Object()  //this is singleton object


const tinderUser = {} // this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Summy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"sujit",
            lastname:"thorat",
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4= {4:'c', 5:'d'}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)


const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);



const users = [
    {
        id:1,
        email:'s@gmail.com'
    },
    {
        id:2,
        email:'a@gmail.com'
    },{
        id:3,
        email:'b@gmail.com'
    },{
        id:4,
        email:'c@gmail.com'
    },{
        id:5,
        email:'d@gmail.com'
    },{
        id:6,
        email:'e@gmail.com'
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //we can find key using this logic
// console.log(Object.values(tinderUser)); //similarly we can also find values using this logic
// console.log(Object.entries(tinderUser)); //It convert key and values in array format
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    courseName:"JavaScript",
    price:"2999",
    courseInstructor:"sujit thorat"
}

// course.courseInstructor

const {courseInstructor} = course //inside this coursInstruction is very large name so we can conver it in very short using below code
const {courseInstructor:instructior} = course // using this logic we can reduce the name
console.log(instructior);
// console.log(courseInstructor);


//json

[
    {},
    {},
    {},
    {},
]