const buttonAdd = document.getElementById("button-add");
const popupClose = document.getElementById("popup__close");
const popup = document.getElementById("popup");

const categories = document.querySelectorAll(".category");
const categoryTitle = document.querySelector(".category-title");
const categoryAuthor = document.querySelector(".category-author");
const categoryPages = document.querySelector(".category-pages");
const categoryStatus = document.querySelector(".category-status");

const formItems = document.querySelectorAll(".form__item");
const formSubmit = document.getElementById("button-submit");

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};

Book.prototype.displayBook = function () {
  const titleBlock = document.createElement("div");
  titleBlock.classList.add("title-block");
  categoryTitle.appendChild(titleBlock);
  // delete
  const deleteElement = document.createElement("div");
  deleteElement.classList.add("button");
  deleteElement.classList.add("button-delete");
  deleteElement.innerHTML = "&times";
  titleBlock.appendChild(deleteElement);
  // title
  const titleElement = document.createElement("div");
  titleElement.classList.add("book-info");
  titleElement.classList.add("book-info-title");
  titleElement.innerHTML = this.title;
  titleBlock.appendChild(titleElement);
  // author
  const authorElement = document.createElement("div");
  authorElement.classList.add("book-info");
  authorElement.classList.add("book-info-author");
  authorElement.innerHTML = this.author;
  categoryAuthor.appendChild(authorElement);
  // pages
  const pagesElement = document.createElement("div");
  pagesElement.classList.add("book-info");
  pagesElement.classList.add("book-info-pages");
  pagesElement.innerHTML = this.pages;
  categoryPages.appendChild(pagesElement);
  // status
  const statusElement = document.createElement("button");
  statusElement.classList.add("book-info");
  statusElement.classList.add("book-info-status");
  statusElement.innerHTML = this.status;
  categoryStatus.appendChild(statusElement);
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

function addBookToLibrary() {
  if (!validateInput()) return;

  const title = document.getElementById("form__item-title").value;
  const author = document.getElementById("form__item-author").value;
  const pages = document.getElementById("form__item-pages").value;
  const status = document.querySelector('input[name="status"]:checked').value;

  const newBook = new Book(title, author, pages, status);
  newBook.displayBook();
  myLibrary.push(newBook);

  popup.style.display = "none";
  formItems.forEach((item) => (item.value = ""));
}

popupClose.addEventListener("click", () => (popup.style.display = "none"));
buttonAdd.addEventListener("click", () => (popup.style.display = "flex"));

formSubmit.addEventListener("click", addBookToLibrary);
