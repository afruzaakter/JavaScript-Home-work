// Sum of all numbers in an Array./ array sob man jog kora 
// process-1;
// const numbers = [50, 50 ];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

// Sum of all numbers in an Array./ array sob man jog kora  function use kore
// process-2; problem
const numbers = [41, 50, 50];
function arrayTotal(numbers){
    let sum = 0;
    // for( let i = 0; i < numbers.length; i++){
    //     const element = numbers[i];
    //     sum = sum + element;
    // }

    for(const element of numbers){
        console.log(element);
        // const element = numbers[element];
        sum = sum + element;
        console.log(sum);
    }
    return sum;
}
const total = arrayTotal(numbers);
console.log('array Total', total);


