// problem-1:
// function fullName(afruza , sonia){
//     var result = 'Afruza Akter' + ' Sonia';
//     return result;  
// }
// var nameResult = fullName('afruza', 'sonia');
// console.log(nameResult);
// problem-2:

//  var dailyWork = 0;
//  while(dailyWork < 10){
//      console.log( "১. রাত ৮ টা বাজে মডিউল আনলক করো","২. ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো","৩. ভিডিও দেখতে দেখতে নোটস নাও ","৪. মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ","৫. কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো ");
     
//      dailyWork ++;
//  }

//  let numbers = 13;
//  for(let i = 1; i<=10; i++){
//      let result = i * numbers;
//      let multiplicationTable = numbers + " * " + i + " = " + result;
//      console.log(multiplicationTable);
//  }

 let numbers =13;
 function multiplicationTable(multiplication){
    for(let i = 1; i<=10; i++){
        let result = i * numbers;  
    } 
    return result; 
 }
 let multiOutputTable = multiplicationTable(numbers + " * " + i + " = " + result);
 console.log(multiOutputTable);


//  string type variable 
// var className = "Two";
// //number type variable
// var age = 80;
// //boolean type variable
// var pass = false;

 
// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
// two number addition
// let number1 = 50;
// let number2 = 60;
// let addition = number1 +  number2;
// console.log(addition);

// let number1 = 50;
// let number2 = 60;
// let addition = number1 -  number2;
// console.log(addition);

// let number1 = 50;
// let number2 = 60;
// let addition = number1 *  number2;
// console.log(addition);

// let number1 = 40;
// let number2 = 4;
// let addition = number1 / number2;
// console.log(addition);

// let number1 = 40;
// let number2 = 4;
// let addition = number1 % number2;
// console.log(addition);

 
 
// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
// 1.
// var num1 = 60;
// var num2 = 70;
// var result = num1 > num2;
// console.log("Number 1 is big",result);
// 2.
// var num1 = 60;
// var num2 = 70;
// var result = num1 < num2;
// console.log("Number 1 is big",result);

// 3.
// var num1 = 100;
// var num2 = 200;
// var result = num1!=num2;
// console.log("Number 1 is big",result);
// 4.
// var num1 = 100;
// var num2 = 200;
// var result = num1==num2;
// console.log("Number 1 is big",result);

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// var number = 7;
// while(number<=19){
//     console.log(number);
//     number=number+2;
// }

// for(var i = 7; i<= 19; i = i + 2){
//     console.log(i)
// }
 
// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// var input = 'T';
// var letter = input.toLowerCase();
// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//     console.log(letter,"is vowel");
// }
// else{
//     console.log(letter,"is consonant");
// }

 
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
// let num1 = 50;
// let num2 = 80;
// let num3 = 100;
// if(num1 > num2 && num1 > num3 ){
//     console.log("Num1 is big");
// }
// else if(num2 > num1 && num2> num3){
//     console.log("Num2 is big");
// }
// else{
//     console.log("Num3 is big");
// }

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

// var number = [40, 50, 60, 70 ,80 ];
// console.log(number);
// number[4] = 55;
// console.log(number);
// number.push(79,66);
// console.log(number);
// number.pop();
// console.log(number);
// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
// var numbers = [40, 50, 60, 70 ,80 ];
// for(var i = 0; i<numbers.length; i++){
//     console.log(numbers);
// }
// for(var number of numbers){
//     console.log(number);
// }

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
// var numbers = [40,50,85,80,55,59,90, 100, 96];
// for(var number of numbers){
//     if(number >= 80){
//         console.log(number);
//     
// }

// Function use problem solve :
var numbers = [40,50,85,80,55,59,90, 100, 96];
function largestNumber(numbers){
    let arrayNumber = [];
    for(const number of numbers){
     
        if(number> 80 ){  
           arrayNumber.push(number);
            
        }
    }
    return arrayNumber;
}
const result = largestNumber(numbers);
console.log(result);

 
// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

// var student={
//     name: 'Mala Akter',
//     studentId: 1002,
//     class: 'Ten'
// }
// console.log(student);
// student["name"] = 'Mim akter';
// student["studentId"] = 2002;
// console.log(student);


// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 
// ০. রিকার্সন বুঝলে চমৎকার। আর না বুঝলে আপাতত রিকার্সন না বুঝলে সেটাকে সাইডে রেখে দাও। শুধু মাথায় রাখো রিকার্সন নামে একটা জিনিস আছে। সেটা একটা ফাংশনকে নিজের ভিতর থেকে কল করে। 

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
// const names= ['Juthi','Liton','Lina afruz tuli','Sabina','al-amin'];
// function bestFriend(names){
//  let bestFriend = names[0];
//  for(let name of names){
//      if(name.length > bestFriend.length){
//          bestFriend = name;
//      }
//  }
//  return bestFriend;
// }
// const result = bestFriend(names);
// console.log(result)

