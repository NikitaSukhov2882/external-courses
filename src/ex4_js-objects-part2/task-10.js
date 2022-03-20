const reverseFunction = (name) => {
    let nameElements = name.split('');
    let element = '';
    for (let index = 0; index < nameElements.length; index++) {
        element = nameElements[index] + element;    
    }
    
    return element;
}
module.exports = reverseFunction;