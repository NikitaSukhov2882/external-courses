function dataType(value) {
    if (typeof value == 'string') {
        value = 'string';
    } else if (isNaN(value)) {
        value = 'undefined';
    } else if (typeof value == 'number') {
        value = 'number';
    } else {
        value = 'undefined';
    }
    return value;
}
module.exports = dataType;