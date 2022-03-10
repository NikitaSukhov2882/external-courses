function primeNumber(value) {
    let output;
    if (value > 1000) {
        output = 'Данные неверны';
    } else if (value == 0 || value == 1) {
        output = 'Не причисляется ни к простым, ни к составным числам';
    } else {
        for (let index = 2; index <= Math.ceil(Math.sqrt(value)); index++) {
            if (value % index == 0) {
                output = 'Составное число';
                break;
            } else { 
                output = 'Простое число';
            }
        }
    } 
    return output;
}
module.exports = primeNumber;