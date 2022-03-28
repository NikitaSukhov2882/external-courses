const sliceArray = (array, begin = 0, end = array.length) => {
    let newArray = [];
    let newBegin,
        newEnd;
    begin >= 0 ? newBegin = begin : newBegin = array.length + begin;
    end >= 0 ? newEnd = end : newEnd = array.length + end;
    for (let index = newBegin, i = 0; index < newEnd; index++, i++) {
        newArray[i] = array[index];
    }
    
    return newArray;
};

module.exports = sliceArray;