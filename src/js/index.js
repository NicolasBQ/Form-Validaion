import '../scss/main.scss';
import { nameValidation, emailValidation, formValidate,passwordValidation, passwordKeyValidation, confirmationValidation } from './validation';

const appInit = () => {
    const inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(input => input.value = '');

   //Events
   getElement('.form__name').addEventListener('blur', nameValidation);
   getElement('.form__email').addEventListener('blur', emailValidation);
   getElement('.form__password').addEventListener('keyup', passwordKeyValidation);
   getElement('.form__password').addEventListener('blur', passwordValidation);
   getElement('.form__confirmation').addEventListener('blur', confirmationValidation);
   getElement('form').addEventListener('submit', formValidate);
}

const getElement = (cl) => {
    return document.querySelector(cl);
}

document.addEventListener('DOMContentLoaded', appInit);

export {
    getElement
}

