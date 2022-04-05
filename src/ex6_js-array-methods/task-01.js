const sliceArray = (array, begin = 0, end = array.length) => {
    let newArray = [];
    let newBegin,
        newEnd;
    newBegin = begin >= 0 ? begin : array.length + begin;
    newEnd = end >= 0 ? end : array.length + end;
    for (let i = 0; newBegin < newEnd; newBegin++, i++) {
        newArray[i] = array[newBegin];
    }
    
    return newArray;
};

module.exports = sliceArray;