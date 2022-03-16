const deepClone = (object) => {
    let newObject = {};

    if (Array.isArray(object)) {
        newObject = [];
    }
    
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof (object[key]) === 'object' && object[key] !== null) {
                newObject[key] = deepClone(object[key]);
            } else {
                newObject[key] = object[key];
            }
        }
    }
    return newObject;
};