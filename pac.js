

var signal =['green', 'yellow', 'red'];
var red = true;
for(var i=0; i<signal.length; i++){
    if(signal[i] == 'red'){
       console.log("warning");
    }
    else if(signal[i] == 'yellow'){
       console.log('stop')
    }
    else if(signal[i] == 'green'){
        console.log('you can go')
    }
}



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 

