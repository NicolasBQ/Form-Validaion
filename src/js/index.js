import '../scss/main.scss';
import { nameValidation, emailValidation, formValidate,passwordValidation, passwordKeyValidation, confirmationValidation } from './validation';

const appInit = () => {
    const inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(input => input.value = '');

    const form = document.querySelector('.form');
    const name = document.querySelector('.form__name');
    const email = document.querySelector('.form__email');
    const password = document.querySelector('.form__password');
    const passwordConfirmation = document.querySelector('.form__confirmation');

   //Events

   name.addEventListener('blur', nameValidation);
   email.addEventListener('blur', emailValidation);

   password.addEventListener('keyup', passwordKeyValidation);
   password.addEventListener('blur', passwordValidation);

   passwordConfirmation.addEventListener('blur', confirmationValidation);

   form.addEventListener('submit', formValidate)
}

document.addEventListener('DOMContentLoaded', appInit);


// Validar el formulario entero al enviarlo. (Refactorizar si es necesario). 
// Feedback del formulario con SVG.

