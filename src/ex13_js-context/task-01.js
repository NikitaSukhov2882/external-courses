function Calculator() {
    let result = 0;

    return {
        add(value = 0) {
            result = result + value;

            return this;
        },

        subtract(value = 0) {
            result = result - value;

            return this;

        },

        multiply(value = 1) {
            result = result * value;

            return this;
        },

        divide(value = 1) {
            result = result / value;

            return this;

        },

        setState(value) {
            result = value;

            return this;
        },

        getResult() {
            
            return result;
        },
        
        reset() {
            result = 0

            return this;
        },

        fetchData(callback) {
            Promise.resolve(callback).then((result = 500));

            return this;
        },

    };
};

const calculator = new Calculator();

module.exports = calculator;