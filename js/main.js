// Declaration of my items in he DOM
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBookBtn = document.querySelector('#add');
const bookList = document.querySelector('#bookList');

// Initialise the collection of books
let collectBooks = JSON.parse(localStorage.getItem('books')) || [];

// Function to add Book to the Collection of books, here callectBooks
function addBook() {
  const book = {};
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  collectBooks.push(book);
}

// Function to ddelete the book and Update the localStorage
function remove(element) {
  const bookId = element.target.id;
  const bookToDelete = collectBooks[bookId - 1];
  const freshCollection = collectBooks.filter((book) => book !== bookToDelete);
  collectBooks = freshCollection;
  localStorage.setItem('books', JSON.stringify(freshCollection));
  element.target.parentElement.remove();
}

// Function to display all books
function displayBooks() {
  bookList.innerHTML = '';
  collectBooks.forEach((element, index) => {
    // Define all neccessary items
    const parentContainer = document.createElement('div');
    const titleContainer = document.createElement('p');
    const authorContainer = document.createElement('p');
    const removeButton = document.createElement('button');
    const hLine = document.createElement('hr');
    removeButton.innerText = 'Remove';
    // Remove book button on Click
    removeButton.addEventListener('click', (e) => {
      remove(e);
    });

    removeButton.setAttribute('id', index + 1);
    titleContainer.innerText = element.title;
    authorContainer.innerText = element.author;

    parentContainer.appendChild(titleContainer);
    parentContainer.appendChild(authorContainer);
    parentContainer.appendChild(removeButton);
    parentContainer.appendChild(hLine);

    bookList.append(parentContainer);
  });
}
// Button to add new book to the collection
addBookBtn.addEventListener('click', () => {
  addBook();
  bookTitle.value = '';
  bookAuthor.value = '';
  localStorage.setItem('books', JSON.stringify(collectBooks));
  displayBooks();
});

window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
