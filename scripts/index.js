const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const nameInput = newPostModal.querySelector("#card-image-input");
const linkInput = newPostModal.querySelector("#image-caption-input");


const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.closeModal(editProfileModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.closeModal(newPostModal);
});

function handledEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handledEditProfileSubmit);


function handledNewPostSubmit(evt) {
  evt.preventDefault();
   console.log("Image URL:", nameInput.value);
  console.log("Caption:", linkInput.value);
  newPostModal.classList.closeModal(newPostModal);
}

newPostModal.addEventListener("submit", handledNewPostSubmit);