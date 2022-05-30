import myMenu from "../modules/menu.js";
import {
  BookClass,
  bookTitle,
  bookAuthor,
  addBookBtn,
  bookList,
  collectBooks,
} from "../modules/bookClass.js";
const myBookList = new BookClass();

// Button to add new book to the collection

addBookBtn.addEventListener("click", () => {
  myBookList.addBook();
  bookTitle.value = "";
  bookAuthor.value = "";
  localStorage.setItem("books", JSON.stringify(collectBooks));
  myBookList.displayBooks();
});

window.addEventListener("DOMContentLoaded", () => {
  myBookList.displayBooks();
});

myMenu();

document.getElementById("date").innerHTML = Date();
