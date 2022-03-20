const getCamelCase = (str) => {
    str = str.toLowerCase();
    let strElements = str.split (' ');
    let element;
    for (let index = 1; index < strElements.length; index++) {
        element = strElements[index][0].toUpperCase();
        strElements[index] = element + strElements[index].substr(1);
        
    }
    
    return str = strElements.join('');
}
module.exports = getCamelCase;