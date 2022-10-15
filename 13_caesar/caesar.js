const caesar = function(letter,num) {

    const alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // lower case alphabet
    const alphabetU = alphabetL.map(element => {   // upper case alphabet
        return element.toUpperCase();
      });
    let text = ""; // final output
    let char ="";  // character from parameter letter
    const letterA = letter.split(""); // parameter letter split into array

    for (let i = 0; i < letter.length; i++){ 

        char = letterA[i];

         if( char.toUpperCase() != char.toLowerCase() ){ // if char is a letter (alphabet)
    
            if(alphabetU.includes(char)){ // if char is in upper case

                const charIndex = alphabetU.indexOf(char); // find the alphabetU array index of matching character (that equals char)
                const aIndex = (charIndex + (num % 26)) % 26; // formula that shortens the requested number (num) to within the array range
                text += alphabetU.at(aIndex); // add the matching letter to output
              

            } else{ // char is in lower case

                const charIndex = alphabetL.indexOf(char); // find the alphabetL array index of matching character (that equals char)
                const aIndex = (charIndex + (num % 26)) % 26; // formula that shortens the requested number (num) to within the array range
                text += alphabetL.at(aIndex); // add the matching letter to output
               
            }

         } else{ // if character (char) is not a letter, add it as is
             
             text += char;
         }
         
         
        }
        

    return text;

};


// document.getElementById("p").innerHTML = caesar('Hello, World!', 75);

// Do not edit below this line
module.exports = caesar;
