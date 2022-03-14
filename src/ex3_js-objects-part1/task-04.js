function addingAProperty(object,name) {
    const newObject = object;   
    if (newObject.hasOwnProperty(name) == false) {
        newObject[name] = 'new';
    }

    return newObject;
}
module.exports = addingAProperty;