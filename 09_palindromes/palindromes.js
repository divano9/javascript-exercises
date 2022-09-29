const palindromes = function (string) {
    
    const nString = string.replace(/\W/g, '').toLowerCase(); // delete all non alphabet(letter) and transform string to lower case
    let rString = "";
    for (i=nString.length - 1; i >=0 ; i-- ){
        rString += nString[i];
    }

    return nString == rString ? true : false; // if both are equeal its a palindrome, return true, if not return false
    
};



//document.getElementById("p").innerHTML=palindromes("aha!!!");



// Do not edit below this line
module.exports = palindromes;
