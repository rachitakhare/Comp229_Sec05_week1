

// var myArray = [2,5,3];
// function sum(a,b){
//     return a+b;
// } 
// function sumN(...args){//rest
// let numSum = 0;
// for(const arg of args){
//     numSum+=arg;
// }
// return numSum;
// }

//console.log(sumN(1,2,3,4,5));
//-----  Design a function, which multiplies first two arguments , and sums rest of the argument 


function sumN(a, b, ...args){
    let n=a*b
    let sum = 0;
    for(arg of args){
        sum+=arg
    }
    return [n,sum]
    }

console.log(sumN(2,2,2,4,5));

//result = [4,11]