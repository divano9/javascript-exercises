const add = function(a,b) {

  const add = a + b;
  return add;
};

const subtract = function(a,b) {

	const subtract = a - b;
  return subtract
};

const sum = function(numbs) {

	let sum = 0;
  for (const numb of numbs){
    sum += numb;
  }

  return sum;
};

const multiply = function(numbs) {
  
  multySum = 1;
  for (const numb of numbs){
    multySum *= numb;
  }

  return multySum;
};

const power = function(a,b) {

	const pow = Math.pow(a,b);
  return pow;
};

const factorial = function(a) {
	
  let factorial = 1;
  if (a > 0){
    for (i = 1; i <= a; i++){
      factorial *=i;
    }
  }

  return factorial;
};

// document.getElementById("p").innerHTML = factorial(10);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
