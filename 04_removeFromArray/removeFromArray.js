const removeFromArray = function(arrayF,...args) {
    
    let array = arrayF;

    for (const arg of args){
        

        let index = array.indexOf(arg);
       
        if(array.includes(arg)){
            
            array.splice(index,1); 
        } 

    }
    


    return array
}; 




// Do not edit below this line
module.exports = removeFromArray;
