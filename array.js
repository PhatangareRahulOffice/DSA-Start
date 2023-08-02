// 1. Remove All even integers from an array
const arr =  [4, 1, 9, 10, 15, 22, 5, 14 ]     // o/p [4,10,22,14];
   
//  Approach 1
//  const removeEvenIntiger=(arr)=>{
//     const oddNumber = [];
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] % 2 == 0){
//            oddNumber.push(arr[i])
//         }
//     }
//     return oddNumber
//  }
//  console.log(removeEvenIntiger(arr))

// Approach 2

// const removeEvenIntiger = (arr)=>{
//    return arr.filter((num)=> 
//    num % 2 == 0 )
// }
// console.log(removeEvenIntiger(arr))

// 1. Remove All odd integers from an array

// Approach 1
// const removeOddNumber = (arr)=>{
//    const evenNumber = [];
//    for(let i= 0; i< arr.length; i++){
//       if(arr[i] % 2 != 0){
//          evenNumber.push(arr[i]);
//       }
//    }
//    return evenNumber
// }
// console.log(removeOddNumber(arr))

//  Approach 2

// const removeOddNumber =(arr)=>{
//     return arr.filter((num)=>
//    num % 2 != 0)
// }
// console.log(removeOddNumber(arr))


// 2. Find all repeated numbers from an array

 const Input = [1,2,3,4,5,6,1, ,1,3,7,9,10,2];
//  Approach 1 
//  const findRepeatedNumber =(arr)=>{

//    const repeatedNumber = [];
//    for(let i=0; i < arr.length; i++){
//       for(let j= i+1; j< arr.length; j++){
//          if(arr[i]=== arr[j]){
//             repeatedNumber.push(arr[i]);
//          }
//       }
//    }
//    return repeatedNumber
//  }

// console.log(findRepeatedNumber(Input))

//  Apprach 2
// const findRepeatedNumber =(arr)=>{
//    const repeatedNumber = [];

//    for(let i=0; i<arr.length; i++){
//       if(arr.indexOf(arr[i], i+1) != -1 && repeatedNumber.indexOf(arr[i])=== -1 ){
//          repeatedNumber.push(arr[i])
//       }
//    }
//    return repeatedNumber
// }
// console.log(findRepeatedNumber(Input))


//  Approach 3

