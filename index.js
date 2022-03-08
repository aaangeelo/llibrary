const buttonAdd = document.getElementById("button-add");
const popupClose = document.getElementById("popup__close");
const popup = document.getElementById("popup");

const bookTitle = document.getElementById("form__item-title");
const bookAuthor = document.getElementById("form__item-author");
const bookPages = document.getElementById("form__item-pages");
const bookStatus = document.querySelector('input[name="isRead"]:checked');
const buttonSubmit = document.getElementById("button-submit");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {}

const harryPotter = new Book("Harry Potter", "Atkinson", 356, "Not Read");
const gameOfThrones = new Book("Game of Thrones", "Bush", 738, "Read");

popupClose.addEventListener("click", () => (popup.style.display = "none"));
buttonAdd.addEventListener("click", () => (popup.style.display = "flex"));

console.log(bookAuthor.value);
