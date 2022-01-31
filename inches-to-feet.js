// convert inch to feet 

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my Inches in feet', feet);

var youInches = 144;
var feet = inchToFeet(youInches);
console.log('You inches in feet', feet);

var dadiInches = 244;
var feet = inchToFeet(dadiInches);
console.log('Dadi inches in feet', feet);

var dadaInches = 500;
var feet = inchToFeet(dadaInches);
console.log('Dada inches in feet', feet);


// miles to kilometer convert 

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km', marathon);

var dhaka = mileToKilometer(500);
console.log('Dhaka in km', dhaka);