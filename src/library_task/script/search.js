import { books } from './bd.js';
import { renderItems } from './generateCards.js';

const input = document.querySelector('.main__searching');

const userInput = () => {
  const userData = input.value;
  const regexp = new RegExp(`${userData}`, 'i');
  const data = [];

  for (let i = 0; i < books.length; i += 1) {
    if (regexp.test(`${books[i].bookName}`)) {
      data.push(books[i]);
    }
  }

  document.querySelector('#book').innerHTML = '';
  renderItems(data);
};

input.addEventListener('input', userInput);