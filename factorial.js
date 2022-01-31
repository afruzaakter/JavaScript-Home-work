// Recalculate factorial multiple times using a function 

function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i<=number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
 
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is', firstFactorial);

var secondFactorial = getFactorial(6);
console.log('factorial of 6 is', secondFactorial);

