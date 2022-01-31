

var signal =['green', 'yellow', 'red', 'green'];
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


// green = false;
// yellow = false;
// red = ture;
// if(green == true){
//     console.log(' you can go');
// else if( yellow == true){
//     console.log('Hold on');
// }
// else if(red == true){
//     conole.log('Stop');
//     }
// }
