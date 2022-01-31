// Check whether a year is a leap year or not 

function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2087;
const isMyYearLeap = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeap);