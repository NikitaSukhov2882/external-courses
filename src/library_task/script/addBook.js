  const addBookButton = document.querySelector('.add__item');

  const addBook = () => {
    document.querySelector('.modal').remove();
  };

  const modalWindow = () => {
    const div = document.createElement('div');
    div.className = 'modal';
    div.innerHTML = `
          <div class="modal__window">
              <h2>Add book</h2>
              <label>Title <input class="book__title" type="text"></label>
              <label>Author <input class="book__author" type="text"></label>
              <label>Добавьте обложку: <input class="book__img" type="file" accept="image/png, image/jpeg"></label>  
              <button id='newBook' class="new__book">Add</button>
          </div>
      `;
    document.querySelector('body').append(div);
    document.querySelector('#newBook').addEventListener('click', addBook);
  };

  addBookButton.addEventListener('click', modalWindow);