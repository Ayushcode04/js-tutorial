// const tinderUser = new Object()  //singleeton obj

const tinderUser = {}  //non single.....

tinderUser.id = "123abc"
tinderUser.name ="Sam"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname :{
        userfullname : {
            firstname:"Ayush",
            lastname:"Singh"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3); 

const users =[
    {
         id: 1,
        email: "h@gmail.com"
    },
    {
         id: 2,
        email: "a@gmail.com"
    },
    {
         id: 3,
        email: "g@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:'Js in eng',
    price : "999",
    courseInstructor : "Ayush"

}
// course.courseInstructor
// destructuring in js
const {courseInstructor : instructor} = course

console.log(courseInstructor)


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
