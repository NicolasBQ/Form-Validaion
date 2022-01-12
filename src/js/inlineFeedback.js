//Inline Feedback
const emptyInput = (nextElem, target) => {
    if(nextElem.dataset.error === 'emptyField') return;

    let errorMessage = document.createElement('span');
    errorMessage.innerText = 'This field cannot be empty';
    errorMessage.classList.add('form__input--message');
    errorMessage.dataset.error = 'emptyField';
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

const wrongEmail = (nextElem, target) => {
    if(nextElem.dataset.error === 'wrongEmail') return;
    if(nextElem.dataset.error === 'emptyField') {
        nextElem.innerText = 'The email is incorrect e.g example@email.com';
        return;
    } 

    let errorMessage = document.createElement('span');
    errorMessage.innerText = 'The email is incorrect (example@email.com)';
    errorMessage.classList.add('form__input--message');
    errorMessage.dataset.error = 'emptyField';
    target.parentNode.insertBefore(errorMessage, target.nextSibling);

    target.classList.remove('form__input--valid');
    target.classList.add('form__input--invalid');
}

export {
    emptyInput,
    fullfitInput,
    wrongEmail
}