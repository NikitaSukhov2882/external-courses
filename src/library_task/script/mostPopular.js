import { books } from './bd.js';
import { renderItems } from './generateCards.js';

const button = document.getElementById('most_popular');

const generatePopular = () => {
  const result = [];
  console.log(result);

  for (let i = 0; i < books.length; i += 1) {
    if (books[i].stars >= 5) {
      result.push(books[i]);
    }
  }

  document.querySelector('#book').innerHTML = '';
  renderItems(result);
};

const refreshButton = (e) => {
  const target = e.target;
  const allBooks = document.getElementById('all_books');

  if (!target.classList.contains('search__tab')) {
    allBooks.classList.remove('search__tab');
    target.classList.add('search__tab');
    generatePopular();
  } else {
    target.classList.remove('search__tab');
    allBooks.classList.add('search__tab');
    document.querySelector('#book').innerHTML = '';
    renderItems(books);
  }
};

button.addEventListener('click', refreshButton);