function addingAProperty(object,name) {
    const newObject = {};
    for (const key in object) {
        newObject[key] = object[key];
        };   
    if (newObject.hasOwnProperty(name) == false) {
        newObject[name] = 'new';
    };

    return newObject;
};
module.exports = addingAProperty;