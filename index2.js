// Additional assignments for Day 8

const { join } = require("path")

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array=[1,3,5]
 let newArray=[]
//  for(i=array.length-1;i>=0;i--){
//     newArray.push(array[i])
//     console.log(newArray)
//  }
for(let i=array.length-1;i>=0;i--){
    newArray.push(array[i])
}
console.log(newArray)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
console.log("----------exercise 2---------------")
console.log(Math.max(...array))

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("------------------exercise3----------------")
console.log(Math.min(...array))

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("-----------------exercise4-----------------")
let numbers=[2,5,7,9,8,,11,112,12]
let even=[]

for(i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
       even.push(numbers[i])
    }
}
 console.log(even)


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("-----------------exercise5-----------------")
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
      delete numbers[i]
    }
}
console.log(numbers.join())
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
console.log("-----------------exercise6-----------------")
let string="audesfkidosfuh"

let newString=[]

for(i=0;i<string.length;i++){
    if(string[i]==="a"||string[i]==="e"||string[i]==="i"||string[i]==="o"||string[i]==="u"){
        delete string[i]
    }else{
        newString.push(string[i])
    }
}


console.log(newString.join())
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
console.log("-----------------exercise7-----------------")
numbersArray=[12,76,89,75]
for(i=0;i<numbersArray.length;i++){
    
 console.log(numbersArray[i]+1)
}



/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log("-----------------exercise8-----------------")

stringArray=["strive", "is", "great"]
let strings=[]
for(i=0;i<stringArray.length;i++){
    strings.push(stringArray[i].length)
   
}
console.log(strings)

