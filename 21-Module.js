// const number1 = 50;
// const number2 = 90;
// const number3 = 80;
// if(number1>number2 && number1>number3){
//     console.log("Number1 is big");
// }
// else if(number2 > number1 && number2 > number3){
//     console.log("Number2 is big");
// }
// else{
//     console.log("Number3 is big");
// }

// Task-1: create a function that takes three numbers as input parameter and return you the largest number of the three.

// function findLargest(number1, number2, number3){
//     if(number1 > number2 && number1>number3){
//         return number1;
//     }
//     else if(number2>number1 && number2>number3){
//         return number2;
//     }
//     else{
//         return number3;
//     }
// }
// const largest = findLargest(90, 40, 60);
// console.log("Largest is", largest);

function findSmallest(num1, num2, num3){
    if(num1<num2 && num1<num3){
        return num1;
    }
    else if(num2<num1 && num2<num3){
        return num2;
    }
    else{
        return num3;
    }
}
const smallest = findSmallest(54, 40, 80);
console.log("Smallest Number is",smallest);
