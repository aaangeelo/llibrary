const openModalButton = document.querySelector(".btn-add");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

window.onload = function () {
  openModalButton.addEventListener("click", () => openModal(modal));
  closeModalButton.addEventListener("click", () => closeModal(modal));
  overlay.addEventListener("click", () => closeModal(modal));
};
