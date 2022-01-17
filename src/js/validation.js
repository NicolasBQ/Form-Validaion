//Validation
import { getElement } from "./index";
import {  errorMessage, fullfitInput, successPassCondition, invalidPassCondition  } from "./inlineFeedback";
import { successForm, invalidForm } from "./firebase";
import { conditions } from "./keyValidation";

//Name Validation
const nameValidation = () => {
    let nameInput = getElement('.form__name');
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

//Email Validation Usign DoubleValidation Function
const emailValidation = () => {
    let emailInput = getElement('.form__email');
    return doubleValidation(emailInput, 'The email is incorrect e.g example@email.com');
}

//Password Validation Using DoubleValidation Function
const passwordValidation = () => {
    let passwordInput = getElement('.form__password');
    return doubleValidation(passwordInput, '');
}

//Password Key up validation using keyValidation Module (Open principle)
const passwordKeyValidation = (ev) => {
    let passwordInput = ev.target;
    let passwordConditions = conditions(passwordInput);
    passwordConditions.conditionsArr.forEach(condition => condition.isTrue ? successPassCondition(condition.object) : 
    invalidPassCondition(condition.object));
}

//Password Confirmation Validation
const confirmationValidation = () => {
    let passwordInput = getElement('.form__password')
    let confirmationInput = getElement('.form__confirmation');
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

//Double Validation Function
const doubleValidation = (input, message) => {
    let boolean = false;
    let nextElement = input.nextElementSibling;
    if(!input.validity.valueMissing) {
        if(!input.validity.patternMismatch) {
            boolean = true;
            fullfitInput(nextElement, input);
        } else {
            boolean = false;
            errorMessage(input, message);
        }
    } else {
        boolean = false;
        errorMessage(input);
    }

    return boolean;
}

//Submit Validation
const formValidate = (ev) => {
    ev.preventDefault();
    let inputsValidation = [
        nameValidation(), 
        emailValidation(), 
        passwordValidation(), 
        confirmationValidation()
    ];
    let inputError = inputsValidation.some(validation => !validation);
    inputError ? invalidForm() : successForm();
}

export {
    nameValidation,
    emailValidation,
    passwordValidation,
    confirmationValidation,
    passwordKeyValidation,
    formValidate
}

