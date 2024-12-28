//singleton

// object literals

const mySym = Symbol("Key1") 

const jsUser={
    name : "Ayush",
    "full name":"Ayush Singh",
    [mySym] : "myKey1",
    age :21,
    location  : "Mumbai",
    email:"ayushsinghg04@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "Ayush@gpt.com"
// Object.freeze(jsUser)
jsUser.email = "Ayush@microsoft.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hellllo");
    
}
jsUser.greetingtwo = function(){
    console.log(`Hellllo, ${this.name}`);
    
}
console.log(jsUser.greetings());
console.log(jsUser.greetingtwo());
