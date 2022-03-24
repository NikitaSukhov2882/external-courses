function Calculator() {
    let result = 0;
    function add(value = 0) {
        result = result + value;

        return add;
    };

    function subtract(value = 0) {
        result = result - value;

        return subtract;

    };

    function multiply(value = 1) {
        result = result * value;

        return multiply;
    };

    function divide(value = 1) {
        result = result / value;

        return divide;

    };

    function getResult() {
        
        return result;
    };
    
    function reset() {

        return result = 0;
    };

    return {
        add,
        subtract,
        multiply,
        divide,
        getResult,
        reset,
    };
};
const calculator = Calculator();

module.exports = calculator;