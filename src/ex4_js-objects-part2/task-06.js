
const upperFunction = (name) => {
    let nameElements = name.split('');
    let element = nameElements[0].toUpperCase();
    for (let index = 1; index < nameElements.length; index++) {
        element = element + nameElements[index];

    }
    name = element;

    return name;
}
const getUpperWord = (str) => {
    let array = str.split(' ');
    let element;
    for (let index = 0; index < array.length; index++) {
        array[index] = upperFunction(array[index])
        
    }
    
    return str = array.join(' ');;
}
module.exports = getUpperWord;