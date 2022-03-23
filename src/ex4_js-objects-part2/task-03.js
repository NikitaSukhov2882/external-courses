    const deleteBlank = (str) => {
        let array = str.split('');
        if (array[0] == ' '){
            array.shift();
            
        }   if (array[array.length-1] == ' ') {
            array.pop();
            
        }
        str = array.join('');

        return str;
    }
    module.exports = deleteBlank;