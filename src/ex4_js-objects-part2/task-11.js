const countChar = (str) => {
    let array = str.split('');
    for (let index = 0; index < array.length; index++) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {        
            if (array[index] === array[i]) {
                count++;
                if (i > index) {
                    array = array.filter(function(f) { return f !== array[i] })
                }
            }
        
        }
        console.log(count);
           
    }

    return undefined;
  }
  module.exports = countChar;
