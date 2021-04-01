// 'a'
// // 0 and 1 are bits

// //A group of a bit is a byte
// //010000101
// // posibilities with 2 bits 
// //00 01 10 11 instread of 4 it can have more state 
// //a-z
// //A-Z
// //0-9
// // -)(*)?@#\\

// function foo(num){
//     //Exit 
//     console.log(num);
//     if (num===1){
//         return 1;
//     }

//     return foo(num-1)
// }
// //foo();
// foo(5);

// //fork bomb

// //stack data structure  LIFO
// var stack =[1,3,2,4,5,6,3,8,5,19,10]

// //Queue FIFO 
// var queue =[3,1,2,3,5,3,4,12]

// //fobinnachii series  [1,1,2,3,5,8,13,21]

function f(n) {
    if (n < 2){
    return 1;

}
//console.log ((n-1)+" " +(n-2))
return f(n - 1) + f(n - 2);


}

console.log(f(5));



//factorial 


//dynamic programming and memoization 


//Why you use recursion ? interview  quesition 
//useful for folder structure 