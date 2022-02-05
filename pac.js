

// var signal =['green', 'yellow', 'red'];
// var red = true;
// for(var i=0; i<signal.length; i++){
//     if(signal[i] == 'red'){
//        console.log("warning");
//     }
//     else if(signal[i] == 'yellow'){
//        console.log('stop')
//     }
//     else if(signal[i] == 'green'){
//         console.log('you can go')
//     }
// }



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 

// process-1
// let squareNumber = Math.pow(2,3);
//  console.log(squareNumber);

//  process-2
// function squareNumber(number){
// let squareNumber = Math.pow(5,2);
// return squareNumber;
// }
// const result = squareNumber();
// console.log("5 * 5 = ",result);

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা 
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।

// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// console.log(pizza.toppings[2]);



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
// Process-1:
// let uppercaseName = "HELLO WORLD";
// let result = uppercaseName.toLowerCase();
// console.log(result);
// Process-2:
// function uppercaseName(uppercase){
//     let result = uppercase.toLowerCase();
//     return result;
// }
//  let result = uppercaseName("HELLO WORLD");
//  console.log(result)