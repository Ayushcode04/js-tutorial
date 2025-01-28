const promiseOne  = new Promise(function(resolve, reject){
     //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log('Async Task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 is resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai" , email: "chai@example.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Ayush" , pass: "123"})   
        }else{
            reject('Error : Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function (error) {
    console.log(error);  
}).finally(()=>{console.log('The promise is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Javascript" , email: "123"})
    },1000)
})
