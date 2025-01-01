//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop : ${i}`);
    
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop : ${j}Outer loop : ${i}`);
        // console.log((i+ '*' + j + ' = '+ i*j ));
        
    }
}

let myArr =[ "spiderman","supe","butcher"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

//break and cont

for (let index = 1; index < 20; index++) {
    if (index==5) {
        console.log("Best value 5");
        continue//break
    }
    console.log(`Value of i is ${index}`);
    
}


