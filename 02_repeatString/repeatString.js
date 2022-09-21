const repeatString = function(string,num) {
    let theString ="";

    if(num < 0){
        theString ="ERROR"
    }
    else{
        for (let i = 1; i<=num; i++){
            theString += string
        }
    }
    
    return theString
};

// repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
