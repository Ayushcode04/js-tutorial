const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currvalue)
// {
//     console.log(`acc ${acc} and currval: ${currvalue}`);
    
//     return acc+currvalue},0)

const myTotal = myNums.reduce((acc,currvalue)=>acc+currvalue,0)
console.log(myTotal);

const shoppingCart = [{
    itemName: "js course",
    price: 2999
},
{
    itemName: "py course",
    price: 999
},
{
    itemName: "mobile dev course",
    price: 5999
},
{
    itemName: "data science course",
    price: 12999
},
]


const PriceTopay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(PriceTopay);
