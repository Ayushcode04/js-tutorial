const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

// const promiseone = new Promise()
// const date = new Date()

function User(username, loginCount,isLoogedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const UserOne = new User("Ayush",12,true)
const Usertwo = new User("chaicode",11,false)
console.log(UserOne.constructor);
// console.log(Usertwo);
