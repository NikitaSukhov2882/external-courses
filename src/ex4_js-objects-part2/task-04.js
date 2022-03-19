const upperFunction = (name) => {
    let nameElements = name.split('');
    let element = nameElements[0].toUpperCase();
    for (let index = 1; index < nameElements.length; index++) {
        element = element + nameElements[index];
    }
    name = element;

    return name;
}
module.exports = upperFunction;