//Recursive Sigma
//Write a recursive function that given a number returns the sum of integers from 1 to that number.
//Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.


// sigma (5)
//sigma(4)+Sigma(3)
//sigma (3)+sigma(2)

// function Sigma(n) {
//     if (n < 2){
//     return 1;

// }
// //console.log ((n-1)+" " +(n-2))
// return Sigma(n-1)


// }

// console.log(f(5));



function Sigma(n) {
    console.log(n);
    if (n === 1){
    return n;

}

//console.log (n + Sigma(n - 1))
return n + Sigma(n - 1);

}

//console.log(Sigma(3));

//Recursive Factorial
//given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function Factorial(num){
    console.log(num);
    if(num===1){
        return num;
    }
return num *= Factorial(num-1);
}

console.log(Factorial(6))