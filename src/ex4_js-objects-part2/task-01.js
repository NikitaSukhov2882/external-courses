const checkPrototype = (object,prop) => {
    let newObject = Object.getPrototypeOf(object);

    return newObject[prop];
}
module.exports = checkPrototype;