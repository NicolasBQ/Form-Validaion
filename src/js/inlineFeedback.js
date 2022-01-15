//Inline Feedback
const errorMessage = (target, message = "This field cannot be empty") => {
    if(target.nextElementSibling.dataset.error) {
        target.nextElementSibling.innerText = message;
        return;
    }

    let errorMessage = document.createElement('span');
    errorMessage.innerText = message;
    errorMessage.classList.add('form__input--message');
    errorMessage.dataset.error = 'invalidInput';
    target.parentNode.insertBefore(errorMessage, target.nextSibling);

    target.classList.remove('form__input--valid');
    target.classList.add('form__input--invalid');
}

const fullfitInput = (nextElem, target) => {
    if(nextElem.dataset.error) {
        nextElem.remove();
    }

    target.classList.remove('form__input--invalid');
    target.classList.add('form__input--valid');
}

const successPassCondition = (target) => {
    target.classList.remove('form__password--indications-invalid');
    target.classList.add('form__password--indications-success');
    return;
} 

const invalidPassCondition = (target) => {
    target.classList.remove('form__password--indications-success');
    target.classList.add('form__password--indications-invalid');
    return;
} 

export {
    errorMessage,
    fullfitInput,
    successPassCondition,
    invalidPassCondition,
}