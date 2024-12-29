// Immediately Invoked Function Expressions (IIFE)\

(function Chai() {
    //named IIFE
    console.log(`DB CONNECTED`)    
})();

((name)=>{

    console.log(`DB CONNECTED Two ${name}`);
    
})('Ayush');

