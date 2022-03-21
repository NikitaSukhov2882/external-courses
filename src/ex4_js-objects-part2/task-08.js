const getCamelCase = (str) => {
    str = str.toLowerCase();
    let strElements = str.split (' ');
    for (let index = 1; index < strElements.length; index++) {
        strElements[index] = strElements[index][0].toUpperCase() + strElements[index].substr(1); 
    }
    
    return str = strElements.join('');
}
module.exports = getCamelCase;