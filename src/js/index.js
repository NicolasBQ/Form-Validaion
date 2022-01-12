import '../scss/main.scss';
import { nameValidation, emailValidation  } from './validation';
// import { passwordValidation } from './validation';
// import { confirmationValidation } from './validation';

const appInit = () => {
    let inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(input => input.value = '');

    let form = document.querySelector('.form');
    let name = document.querySelector('.form__name');
    let email = document.querySelector('.form__email');
    let password = document.querySelector('.form__password');
    let passwordConfirmation = document.querySelector('.form__confirmation');

   //Events

   name.addEventListener('blur', nameValidation);
   email.addEventListener('blur', emailValidation);

   
}

document.addEventListener('DOMContentLoaded', appInit);