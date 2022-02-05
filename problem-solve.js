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

//  let numbers =13;
//  function multiplicationTable(multiplication){
//     const result = multiplication[1];
//     for(const multiOutput of multiplication){
//         let result = i * multiplication;  
//     } 
//     return result; 
//  }
//  let multiOutputTable = multiplicationTable(numbers + " * " + i + " = " + result);
// let multiOutput = multiplicationTable(2)
//  console.log(multiOutput);


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
// process-3
// let numbers = [44,500,25,256,22];
// function arrayNumber(numbers){
//     var element = [0]
//     for(var i = 0; i<numbers.length; i++){  
//         var element = numbers;
//     }
//     return element;
// }
// const totalArray = arrayNumber(numbers);
// console.log(totalArray);
// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
// var numbers = [40,50,85,80,55,59,90, 100, 96];
// for(var number of numbers){
//     if(number >= 80){
//         console.log(number);
//     
// }

// Function use problem solve :
// var numbers = [40,50,85,80,55,59,90, 100, 96];
// function largestNumber(numbers){
//     let arrayNumber = [];
//     for(const number of numbers){
     
//         if(number> 80 ){  
//            arrayNumber.push(number);
            
//         }
//     }
//     return arrayNumber;
// }
// const result = largestNumber(numbers);
// console.log(result);

 
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

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch(feet){
//     const inch = feet * 0.0833333;
//     return inch;
// }
// const myFeet = feetToInch(5);
// console.log("My feet in inch",myFeet);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
// function centimeterToMeter(centimeter){
//     const meter = centimeter/100;
//     return meter;
// }
// const result = centimeterToMeter(100);
// console.log(result);

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
// process-1:
// function paperRequirements(x,y,z){
// var first = x * 100;
// var second = y * 200;
// var third = z * 300;
// var totalBookPage= first + second + third;
// return totalBookPage;
// }
//   const totalBookPage = paperRequirements(1,1,1);
//   console.log(totalBookPage);

// process 2:
// function paperRequirements(x,y,z){
//     const totalPaperCopy= (x*100) + (y*200) + (z*300);
//     return totalPaperCopy;
//     }
//       const totalCopy = paperRequirements(1,1,1);
//       console.log(totalCopy);
    //   const totalPaperCopy = paperRequirements(1,1,1);
    //   console.log(totalPaperCopy);
    // ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

    // function hourConvertMinute(hour){
    //     const minute = hour * 60;
    //     return minute;
    // }
    // const myresult = hourConvertMinute(1);
    // console.log(myresult,"minute");

     
// ৫. একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// let numbers = [45, 44, 45, 85, 42, -25, -10];
// function positiveToNagitive(numbers){
//     const element = numbers[0]; 
// for(const number of numbers){
//    let element = number;
//    console.log(element);
// }
// }
// const result = positiveToNagitive(numbers);
// console.log(result);
