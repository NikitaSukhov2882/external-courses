const upperFunction = (name) => {
    name = toLowerCase(name)
    let nameElements = name.split('');
    let element = nameElements[0].toUpperCase();
    for (let index = 1; index < nameElements.length; index++) {
        element = element + nameElements[index];

    }
    name = element;

    return name;
}

const getCamelCase = (str) => {
    let strElements = str.split (' ');
    let newStr = strElements[0];
    for (let index = 1; index < strElements.length; index++) {
        strElements[index] = upperFunction(strElements[index]);
        
    }
    
    return str = strElements.join('');
}
module.exports = getCamelCase;