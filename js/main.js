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

// Function to ddelete the book and Update the localStorage
function remove(element) {
  const bookId = element.target.id;
  const bookToDelete = collectBooks[bookId - 1];
  const freshCollection = collectBooks.filter((book) => book !== bookToDelete);
  collectBooks = freshCollection;
  localStorage.setItem("books", JSON.stringify(freshCollection));
  element.target.parentElement.remove();
}

// Function to display all books
function displayBooks() {
  bookList.innerHTML = "";
  collectBooks.forEach((element, index) => {
    // Define all neccessary items
    const parentContainer = document.createElement("div");
    parentContainer.classList.add("book-card");
    const titleContainer = document.createElement("span");
    const authorContainer = document.createElement("span");
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn");
    const bookInfos = document.createElement("p");
    bookInfos.classList.add("book-infos");
    removeButton.innerText = "Remove";
    // Remove book button on Click
    removeButton.addEventListener("click", (e) => {
      remove(e);
    });

    removeButton.setAttribute("id", index + 1);
    titleContainer.innerText = "'' " + element.title + " '' by ";
    authorContainer.innerText = element.author;
    bookInfos.appendChild(titleContainer);
    bookInfos.appendChild(authorContainer);
    parentContainer.appendChild(bookInfos);
    parentContainer.appendChild(removeButton);

    bookList.append(parentContainer);
  });
}
// Button to add new book to the collection
addBookBtn.addEventListener("click", () => {
  addBook();
  bookTitle.value = "";
  bookAuthor.value = "";
  localStorage.setItem("books", JSON.stringify(collectBooks));
  displayBooks();
});

window.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});
