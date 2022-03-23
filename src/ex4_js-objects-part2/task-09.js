const addWord = (str,subString,value) => {
    let array = str.split(' ');
    if (value == array.length-1) {
        array.push(subString);

        return array.join(' ');
    } else if (value == 0) {
        array.unshift(subString);

        return array.join(' ');
    } else {
        let end = array.slice(value+1);
        let start = array.slice(-array.length, value+1);
    
        return  start.join(' ') + ' '+ subString + ' ' + end.join(' ');
    }
}
module.exports = addWord;