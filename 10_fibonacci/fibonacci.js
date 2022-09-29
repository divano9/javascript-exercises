const fibonacci = function(num) {
   
    const numb = Number(num); // if given a string transform it to number
    let fib = 1;
    let fibA = [1,1]; // innitiate fibonacci array
    for (i = 0; i < numb -2; i++){  // fobonacci loop, parameter num will be the last element of fibA array
        fib += fibA[fibA.length - 2];
        fibA.push(fib);
    }

    if (num < 0){
        return "OOPS"; // if given a negative number return error
    }else{
       return fibA[fibA.length - 1];  
    }

   

};

 // document.getElementById("p").innerHTML = fibonacci(-10)

// Do not edit below this line
module.exports = fibonacci;
