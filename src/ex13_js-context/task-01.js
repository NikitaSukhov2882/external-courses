function Calculator() {
    let result = 0;

    function add(value = 0) {
        result = result + value;

        return this;
    };

    function subtract(value = 0) {
        result = result - value;

        return this;

    };

    function multiply(value = 1) {
        result = result * value;

        return this;
    };

    function divide(value = 1) {
        result = result / value;

        return this;

    };

    function setState(value) {
        result = value;

        return this;
    };

    function getResult() {
        
        return result;
    };
    
    function reset() {
        result = 0

        return this;
    };

    function fetchData(callback) {
        Promise.resolve(callback).then((result = 500));

        return this;
    };

    return {
        add,
        subtract,
        multiply,
        divide,
        setState,
        getResult,
        reset,
        fetchData,
    };
};

const calculator = new Calculator();

module.exports = calculator;