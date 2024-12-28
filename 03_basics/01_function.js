function saymyName() {
    console.log("A")

}

saymyName()

// function addTwoNumbers(n1,n2) {
//     console.log(n1 + n2);    
// }
function addTwoNumbers(n1,n2) {

    // let result = n1+n2
    // return result   
    return n1+n2
}
const result  = addTwoNumbers(1,8)
// console.log(result);

function loginUserMessage(username = "Sam") {
    if (!username){
        console.log("please enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"));
console.log(loginUserMessage());

function calculatePrice(val1,val2,...num1) {//this is rest operator here
    return num1
}

console.log(calculatePrice(200,300,400,500,1000));


const user ={
    username:"Ayush",
    prices:"233"

}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
    
}

// handleobject(user)
handleobject({
    username : "Ash",
    price:"377"
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400]));
