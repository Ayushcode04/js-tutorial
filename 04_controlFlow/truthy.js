const userEmail ="Ayush@gmail"

if (userEmail) {
    console.log("Got user mail");
}else{
    console.log("none");
    
}


//Falsy value
// false,0,-0,BigInt 0n ,"" ,null, unidefined,NaN
//truthy value
// "0","false"," ",[],{},function(){}

if (userEmail.length === 0) {
    console.log("Arr is empty");
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty")
}

//Nullish coalescing Operator (??): null undefined

let val1;
// val1= 5 ?? 10
// val1  =null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary Operator

// condition  ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80"); 


