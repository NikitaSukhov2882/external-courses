const getUpperWord = (str) => {
    let array = str.split(' ');
    let element;
    for (let index = 0; index < array.length; index++) {
        element = array[index][0].toUpperCase();
        array[index] = element + array[index].substr(1);
    }
    
    return str = array.join(' ');;
}
module.exports = getUpperWord;