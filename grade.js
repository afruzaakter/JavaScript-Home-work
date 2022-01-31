
var  marks = [95, 66, 80, 59, 47, 77];

for(var i = 0; i<marks.length; i++){
    if(marks[i]<50){
        console.log('F');
    }
    else if(marks[i]>=50 && marks[i]<60){
        console.log("D");
    }
    else if(marks[i]>=60 && marks[i]<70){
        console.log("C");
    }
    else if(marks[i]>=70 && marks[i]<80){
        console.log("B");
        
    }
    else if(marks[i]>=80 && marks[i]<90){
        console.log("A");
    }
    else if(marks[i]>=90){
        console.log("A+");
    }
    

    
}

// if(marks >= 90){
//     console.log("A+");
// } 
//  else if(marks >= 80){
//     console.log("A");
//  }
//  else if(marks >= 70){
//     console.log("B");
//  }
//  else if(marks >= 60){
//     console.log("C");
//  }
//  else if(marks >= 50){
//     console.log("D");
//  }
//  else{
//     console.log("F")
//  }
 
 