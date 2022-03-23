const getUpperWord = (str) => {
    let array = str.split(' ');
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index][0].toUpperCase() + array[index].substr(1);
    }
    
    return str = array.join(' ');;
}
module.exports = getUpperWord;