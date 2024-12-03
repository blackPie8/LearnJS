// const tinderUser = new Object()    // Singleton Object

const tinderUser = {}  // Not SingleTon

tinderUser.name  = "Ashray"
tinderUser.age = 21
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "ashray@gmail.com",
    fullname : {
        userfullname : {
        firstname : "Ashray",
        lastname : "Stan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3  = Object.assign({},obj1,obj2)
// console.log(obj3);


const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    courseName : "js in hindi",
    price : "999",
    courseInst : "ashray"
}

// console.log(course.price)

// Object De-Structuring

const {courseInst:Inst} = course
console.log(Inst);

// {
//     "name": "ashray",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]