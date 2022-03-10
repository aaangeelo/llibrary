const buttonAdd = document.getElementById("button-add");
const popupClose = document.getElementById("popup__close");
const popup = document.getElementById("popup");

const wrapperMain = document.querySelector(".wrapper-main");

const formItems = document.querySelectorAll(".form__item");
const formSubmit = document.getElementById("button-submit");

let bookID = 0;
let myLibrary = [];

function Book(title, author, pages, status, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

Book.prototype.displayBook = function () {
  const book = document.createElement("div");
  book.classList.add("book");
  book.id = bookID;
  wrapperMain.appendChild(book);

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book__info");
  bookTitle.classList.add("book__info-title");
  bookTitle.innerHTML = this.title;
  book.appendChild(bookTitle);

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book__info");
  bookAuthor.classList.add("book__info-author");
  bookAuthor.innerHTML = `by ${this.author}`;
  book.appendChild(bookAuthor);

  const bookPages = document.createElement("div");
  bookPages.classList.add("book__info");
  bookPages.classList.add("book__info-pages");
  bookPages.innerHTML = `${this.pages} pages`;
  book.appendChild(bookPages);

  const buttonStatus = document.createElement("button");
  buttonStatus.classList.add("btn");
  buttonStatus.classList.add("button-status");
  if (this.status === "Read") buttonStatus.classList.add("button-status-read");
  buttonStatus.innerHTML = this.status;
  book.appendChild(buttonStatus);

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn");
  buttonDelete.classList.add("button-delete");
  buttonDelete.innerHTML = "Delete";
  book.appendChild(buttonDelete);
};

function validateInput() {
  formItems.forEach((item) => {
    if (!item.checkValidity()) item.classList.add("required");
  });

  for (item of formItems) {
    if (!item.checkValidity()) return;
    else item.classList.remove("required");
  }

  return true;
}

function showBook() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

function addBookToLibrary() {
  if (!validateInput()) return;

  const title = document.getElementById("form__item-title").value;
  const author = document.getElementById("form__item-author").value;
  const pages = document.getElementById("form__item-pages").value;
  const status = document.querySelector('input[name="status"]:checked').value;
  const id = bookID;

  const newBook = new Book(title, author, pages, status, id);
  myLibrary.push(newBook);

  popup.style.display = "none";
  formItems.forEach((item) => (item.value = ""));
  bookID++;
}

window.onload = function () {
  popupClose.addEventListener("click", () => (popup.style.display = "none"));
  buttonAdd.addEventListener("click", () => (popup.style.display = "flex"));
  formSubmit.addEventListener("click", addBookToLibrary);
  showBook();
};
