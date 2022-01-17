import '../scss/main.scss';
import { nameValidation, emailValidation, formValidate,passwordValidation, passwordKeyValidation, confirmationValidation } from './validation';

const appInit = () => {
    const inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(input => {
        input.value = ''
        input.classList.remove('form__input--invalid');
        input.classList.remove('form__input--valid');
    });

   //Events
   getElement('.form__name').addEventListener('blur', nameValidation);
   getElement('.form__email').addEventListener('blur', emailValidation);
   getElement('.form__password').addEventListener('keyup', passwordKeyValidation);
   getElement('.form__password').addEventListener('blur', passwordValidation);
   getElement('.form__confirmation').addEventListener('blur', confirmationValidation);
   getElement('form').addEventListener('submit', formValidate);

   getElement('.form__submit').addEventListener('click', blurButton)
}

const getElement = (cl) => {
    return document.querySelector(cl);
}

const blurButton = (e) => {
    e.target.blur();
}

document.addEventListener('DOMContentLoaded', appInit);

export {
    appInit,
    getElement
}

