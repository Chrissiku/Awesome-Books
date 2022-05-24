// Declaration of my items in he DOM
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const addBookBtn = document.querySelector("#add");
const bookList = document.querySelector("#bookList");

// Initialise the collection of books
let collectBooks = JSON.parse(localStorage.getItem("books")) || [];

// Function to add Book to the Collection of books, here callectBooks
function addBook() {
  const book = {};
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  collectBooks.push(book);
}
// Button to add new book to the collection
addBookBtn.addEventListener("click", () => {
  addBook();
  bookTitle.value = "";
  bookAuthor.value = "";
  localStorage.setItem("books", JSON.stringify(collectBooks));
  displayBooks();
});
