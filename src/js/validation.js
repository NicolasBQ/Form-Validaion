//Validation
import {  errorMessage, fullfitInput, successPassCondition, invalidPassCondition  } from "./inlineFeedback";
import { successForm, invalidForm } from "./formFeedback";


const nameValidation = () => {
    let nameInput = document.querySelector('.form__name');
    let nextElement = nameInput.nextElementSibling;
    let name = false;

    if(nameInput.checkValidity()) {
        name = true;
        fullfitInput(nextElement, nameInput)
    } else {
        name = false;
        errorMessage(nameInput);  
    }

    return name;
} 

const emailValidation = () => {
    let emailInput = document.querySelector('.form__email');
    let nextElement = emailInput.nextElementSibling;
    let email = false;
    if(!emailInput.validity.valueMissing) {
        if(!emailInput.validity.patternMismatch) {
            email = true;
            fullfitInput(nextElement, emailInput);
        } else {
            email = false;
            errorMessage(emailInput, 'The email is incorrect e.g example@email.com');
        }
    } else {
        email = false;
        errorMessage(emailInput);
    }

    return email;
}

const passwordValidation = (ev) => {
    let passwordInput = document.querySelector('.form__password');
    let nextElement = passwordInput.nextElementSibling;
    let password = false;

    if(!passwordInput.validity.valueMissing) {
        if(!passwordInput.validity.patternMismatch) {
            password = true;
            fullfitInput(nextElement, passwordInput);
        } else {
            password = false;
            errorMessage(passwordInput, '');
        }
    } else {
        password = false;
        errorMessage(passwordInput);
    }

    return password;
}

const passwordKeyValidation = (ev) => {
    let passwordInput = ev.target;
    let uppercase = document.querySelector('.form__password--indications-uppercase');
    let lowercase = document.querySelector('.form__password--indications-lowercase');
    let number = document.querySelector('.form__password--indications-number');
    let special = document.querySelector('.form__password--indications-special');
    let characters = document.querySelector('.form__password--indications-characters');


    passwordInput.value.match(/[A-Z]/) ? successPassCondition(uppercase) : invalidPassCondition(uppercase);
    passwordInput.value.match(/[a-z]/) ? successPassCondition(lowercase) : invalidPassCondition(lowercase);
    passwordInput.value.match(/[0-9]/) ? successPassCondition(number) : invalidPassCondition(number);
    passwordInput.value.match(/[@$!%*#?&\.]/) ? successPassCondition(special) : invalidPassCondition(special);
    passwordInput.value.length > 9 ? successPassCondition(characters) : invalidPassCondition(characters);
}

const confirmationValidation = () => {
    let passwordInput = document.querySelector('.form__password');
    let confirmationInput = document.querySelector('.form__confirmation');
    let nextElement = confirmationInput.nextElementSibling;

    let samePass = false;

    if(!confirmationInput.validity.valueMissing) {
        if(confirmationInput.value === passwordInput.value) {
            samePass = true;
            fullfitInput(nextElement, confirmationInput);
        } else {
            samePass = false;
            errorMessage(confirmationInput, 'The password must be the same');
        }
    } else {
        errorMessage(confirmationInput);
    }

    return samePass;
}

const formValidate = (ev) => {
    ev.preventDefault();
    let inputsValidation = [nameValidation(), emailValidation(), passwordValidation(), confirmationValidation()];
    
    let inputError = inputsValidation.some(item => !item);

    inputError ? invalidForm() : successForm();
}

export {
    nameValidation,
    emailValidation,
    passwordValidation,
    passwordKeyValidation,
    confirmationValidation,
    formValidate
}

