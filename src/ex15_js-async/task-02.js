const result = document.getElementById('result');
const debouncedInput = document.getElementById('input');

function debounce(input, value, time) {
  const outputValue = value;
  setTimeout(() => {
    outputValue.innerHTML = input.value;
  }, time);
}

debouncedInput.addEventListener('input', () => {
  debounce(debouncedInput, result, 1000);
});