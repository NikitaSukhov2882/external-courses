const reverseFunction = (name) => {
    let nameElements = name.split('');
    let element = '';
    for (let index = 0; index < nameElements.length; index++) {
        element = nameElements[index] + element;
        
    }
    name = element;
    return name;
}
module.exports = reverseFunction;