//Validation
import { emptyInput, fullfitInput, wrongEmail } from "./inlineFeedback";


const nameValidation = (ev) => {
    let nextElement = ev.target.nextElementSibling;
    ev.target.checkValidity() ? fullfitInput(nextElement, ev.target) : emptyInput(nextElement, ev.target);  
} 

const emailValidation = (ev) => {
    let nextElement = ev.target.nextElementSibling;
    ev.target.checkValidity() ? emailRegex(nextElement, ev.target) : emptyInput(nextElement, ev.target);  
} 

const emailRegex = (nextElem, target) => {
    let regex = /[a-zA-Z0-9_.]+@[a-zA-Z.]+\.[a-zA-Z]+/;
    regex.test(target.value) ? fullfitInput(nextElem, target) : wrongEmail(nextElem, target);
}

const passwordValidation = () => {
    
}

const confirmationValidation = () => {
    
}

export {
    nameValidation,
    emailValidation,
    passwordValidation,
    confirmationValidation
}

