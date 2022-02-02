// duplicate array theke unique array bachai korar program 
// Process-1
// const names = ['abul', 'kabol', 'habul','babul', 'kabol', 'abul'];
// function removeDuplicate(names){
//     const unique = [];

//   nicher for use kora lagbe
    /*for(let i = 0; i < names.length; i++){
        const element = names[i];
         console.log(element);
     }
     */

//     for(const element of names){
//         console.log(element);
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);
// Process-2
const numbers = [50, 40, 56, 42, 33, 50, 52, 40, 52, 56, 40];
function removeDuplicate(numbers){
    const unique = [];
    for(const element of numbers){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);