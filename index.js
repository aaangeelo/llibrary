const openModalBtn = document.querySelector(".btn-add");
const closeModalBtn = document.querySelector(".modal__close");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const wrapperMain = document.querySelector(".wrapper-main");
const formInputs = document.querySelectorAll(".form__txt");
const submitInputBtn = document.querySelector(".btn-submit");
let bookID = 0;
let myLibrary = [];

function Book(title, author, pages, status, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = id;
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function validateInputs() {
  formInputs.forEach((input) => {
    if (!input.checkValidity()) input.classList.add("required");
  });

  for (input of formInputs) {
    if (!input.checkValidity()) return;
    else input.classList.remove("required");
  }

  return true;
}

function clearInputValues() {
  formInputs.forEach((input) => {
    input.value = "";
  });
}

function addBookToLibrary() {
  if (!validateInputs()) return;

  const title = document.getElementById("form__txt-title").value;
  const author = document.getElementById("form__txt-author").value;
  const pages = document.getElementById("form__txt-number").value;
  const status = document.querySelector('input[name="status"]:checked').value;

  const newBook = new Book(title, author, pages, status, bookID);
  myLibrary.push(newBook);

  bookID++;
  displayBooks();
  closeModal();
  clearInputValues();
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (!document.getElementById(`${myLibrary[i].id}`)) {
      const bookElementBlock = `        <div class="book" id="${myLibrary[i].id}">
          <div class="book__info book__info-title">${myLibrary[i].title}</div>
          <div class="book__info book__info-author">by ${myLibrary[i].author}</div>
          <div class="book__info book__info-pages">${myLibrary[i].pages} pages</div>
          <button class="book__info book__info-status book-info__btns"> ${myLibrary[i].status}</button>
          <button class="book__info book__info-remove book-info__btns">Remove</button>
        </div>`;

      wrapperMain.insertAdjacentHTML("beforeend", bookElementBlock);

      const bookInfoStatus = document
        .getElementById(myLibrary[i].id)
        .querySelector(".book__info-status");

      if (bookInfoStatus.innerText == "Read")
        bookInfoStatus.classList.add("book__info-status-read");
    }
  }
}

window.onload = function () {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  submitInputBtn.addEventListener("click", addBookToLibrary);
};
