function sameElements(array) {
    let value
    for (let index = 0; index < array.length-1; index++) {
        if (array[index] === array[index+1]) {
            value = true;            
        } else { 
            value = false; 
            break;
        }
    }
    return value;
}
module.exports = sameElements;
