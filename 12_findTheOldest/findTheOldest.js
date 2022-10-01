const findTheOldest = function(people) {
    
    const oldest = people.reduce((prev, current) => { // initiates the getAge function, compares the ages of previous and current person
        
        const pAge = getAge(prev)
        const cAge = getAge(current);
        
        if (pAge  > cAge) {
          return prev
        } else{
          return current
        } 
        
    },0);

    // return JSON.stringify(oldest) 

    return oldest
};

function getAge (per){  
  if (per.yearOfDeath) { // if key yearOfDeath exists. calculate normaly, if not get current date instead of yearOfDeath
    return per.yearOfDeath - per.yearOfBirth
  } else{
    return (new Date).getFullYear() - per.yearOfBirth;
  } 
} 



// document.getElementById("p").innerHTML = findTheOldest(ppl);

// Do not edit below this line
module.exports = findTheOldest;
