function getProperty(object,propertyPath) {
    let array = propertyPath.split('.');
    let newObject = object;
    for (let index = 0; index < array.length; index++) {
        if (newObject.hasOwnProperty(array[index])) {
            newObject = newObject[array[index]];
        } else {
            newObject = undefined;
            break;
            }
        }

    return newObject;
}
module.exports = getProperty;