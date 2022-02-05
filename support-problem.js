// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
// process-1
// var numbers = [40, 50, 60, 70 ,80 ];
// // for(var i = 0; i<numbers.length; i++){
// //     console.log(numbers);
// // }
// process-2
// var numbers = [40, 50, 60, 70 ,80 ];
// for(var number of numbers){
//     console.log(number);
// }
// process-3 solve
// let numbers = [44,500,25,256,22];
// function arrayNumber(numbers){
//     var element = [0]
//     for(var i = 0; i<numbers.length; i++){  
//         var element = numbers;
//     }
//     return element;
// }
// var totalArray = arrayNumber(numbers);
// console.log(totalArray);
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
// Problem solve:
//  let numbers = 13;
//  for(let i = 1; i<=10; i++){
//      let result = i * numbers;
//      let multiplicationTable = numbers + " * " + i + " = " + result;
//      console.log(multiplicationTable);
//  }

// Function use problem: 
//  let numbers =13;
 function multiplication(numbers){
     let result = [];
    for(let i = 1; i<=10; i++){
        let result = i * numbers;  
    } 
    return result; 
 }
   const result = multiplication(12);
  console.log(result);
 

// problem solve:
// var  marks = [95, 66, 80, 59, 47, 77];
// function resultGpa(marks){
//     // var marks = [0];
//     for(var i = 0; i<marks.length; i++){
//         if(marks[i]<50){
//             console.log('F');
//         }
//         else if(marks[i]>=50 && marks[i]<60){
//             console.log("D");
//         }
//         else if(marks[i]>=60 && marks[i]<70){
//             console.log("C");
//         }
//         else if(marks[i]>=70 && marks[i]<80){
//             console.log("B");     
//         }
//         else if(marks[i]>=80 && marks[i]<90){
//             console.log("A");
//         }
//         else if(marks[i]>=90){
//             console.log("A+");
//         }      
//     }
// }
//    resultGpa(marks);
 





