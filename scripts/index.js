/*const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const formElement = popupElement.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__form-field_input_name");
const jobInput = formElement.querySelector(".popup__form-field_input_job");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__profession");

const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
};

const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup();
};

popupEditButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);*/












/*Код с сохранением значения в памяти браузера*/ 


const $editButton = document.querySelector('.profile__edit-button');
const $popup = document.querySelector('.popup');
const $closeButton = document.querySelector('.popup__close-button');
const $form = document.querySelector('.popup__form');
const $nameInput = document.querySelector('.popup__form-field_input_name');
const $jobInput = document.querySelector('.popup__form-field_input_job');
const $name = document.querySelector('.profile__name');
const $job = document.querySelector('.profile__profession');

const getFormData = (el) => {
    const formData = new FormData(el);
    let data = {};

    for (const [key, value] of formData) {
        data[key] = value;
    }

    return data;
}

const LSsave = (data) => {
    localStorage.setItem('lsv0', JSON.stringify(data));
}

const LSload = () => {
    return JSON.parse(localStorage.getItem('lsv0'));
}

$editButton.addEventListener('click', function () {
    $popup.classList.add('popup_is-opened');
    $nameInput.value = $name.textContent;
    $jobInput.value = $job.textContent;
});

$closeButton.addEventListener('click', function () {
    $popup.classList.remove('popup_is-opened');
});

$form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    LSsave(getFormData($form));
    
    $name.textContent = $nameInput.value;
    $job.textContent = $jobInput.value;
    $popup.classList.remove('popup_is-opened');
});

window.addEventListener("load", (event) => {
    const data = LSload();

    $name.textContent = data.name;
    $job.textContent = data.job;
});


