const leapYears = function(year) {
    
    leapY = "";

    if(year % 100 === 0){
        if(year % 400 === 0){
            leapY = true;
        }
        else{
            leapY = false;
        }
    }else if (year % 4 === 0){
        leapY = true;
    }
    else{
        leapY = false;
    }

    return leapY
};


// Do not edit below this line
module.exports = leapYears;
