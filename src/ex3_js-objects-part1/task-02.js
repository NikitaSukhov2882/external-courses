function acceptedObject(object) {
    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
        }

    return undefined;
}
module.exports = acceptedObject;