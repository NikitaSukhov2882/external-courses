const getReduction = (str,maxLength) => {
    let array = str.split('');
    array.length = maxLength-1;
    str = array.join('') + '…';

    return str;
}
module.exports = getReduction;