console.log("hello DSA");


//  1. Remove All even integers from an array

const arr =  [4, 1, 9, 10, 15, 22, 5, 14 ]     // o/p [4,10,22,14];

const removeEvenIntiger=(arr)=>{
let oddIntiger = [];

for(let number of arr){
    if(number % 2 == 0)oddIntiger.push(number)
}
return oddIntiger
}

console.log(removeEvenIntiger(arr))