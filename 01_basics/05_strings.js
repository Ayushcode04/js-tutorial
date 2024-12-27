const gameName = new String('Ayush-ayu-singh-as')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString);

const AnotherString = gameName.slice(-8,4)
console.log(AnotherString);


const newstring1="    Ayush    "
console.log(newstring1.trim(newstring1));

const url = "https://Ayush.com/Ayush%20aSingh"
console.log( url.replace("%20","-"));

console.log(url.includes('Ayush'));
 
console.log(gameName.split('-'));


