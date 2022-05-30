const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBookBtn = document.querySelector('#add');
const bookList = document.querySelector('#bookList');

// Initialise the collection of books

const collectBooks = JSON.parse(localStorage.getItem('books')) || [];

export {
  bookTitle, bookAuthor, addBookBtn, bookList, collectBooks,
};
