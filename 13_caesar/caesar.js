const caesar = function(letter,num) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let text = "";
    const letterA = letter.split("");
    console.log(letterA)
    for (let i = 0; i < letter.length; i++){ 
        const char = letterA[i].toLowerCase();
        
        if(char == " "){  // if whitespace add it without changing
            text += " ";
        }else if(char == ","){
            text += ",";
        }else if(char == "!"){
            text += "!";
        }else {
         const charIndex = alphabet.indexOf(char); // find requested letter in alphabet array and change it according to num
         // text += alphabet[charIndex + num] 
            if((num) > (alphabet.length - 1)){
            const times = Math.floor(num / (alphabet.length - 1));
            
            const aIndex = ((num % 25) + 25) % charIndex;
            text += alphabet.at(aIndex);
            console.log("char: ", char, " new index: ", aIndex, num - times*charIndex,alphabet.length - 1);
            }else{
                text += alphabet.at(charIndex + num);
                console.log(char, charIndex, letter)
            
            }
         
         
        }
        
    }

    return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
};

const al = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","v","w","x","y","z"];
console.log(al.indexOf("c"))

 //  document.getElementById("p").innerHTML = al.at(1 + -2);


document.getElementById("p").innerHTML = caesar('Hello, World!', 75);

// Do not edit below this line
module.exports = caesar;
