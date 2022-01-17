import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getElement } from ".";
import { mediaSizes } from './formFeedback';

//Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxMMtCd-8rwDu7w_EgLpm0MGQcnUA_3WQ",
    authDomain: "contact-form-aa5db.firebaseapp.com",
    projectId: "contact-form-aa5db",
    storageBucket: "contact-form-aa5db.appspot.com",
    messagingSenderId: "267107600300",
    appId: "1:267107600300:web:89e3c0068e2e321880dc09"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const successForm = () => {
    const name = getElement('.form__name').value;
    const email = getElement('.form__email').value;
    const password = getElement('.form__password').value;

    saveData(name, email, password);
}

//Save Data
const saveData = async (name, email, password) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            name,
            email,
            password
        });
        mediaSizes();
    } catch(e) {
        console.log('ERROR');
    }
}

const invalidForm = () => {
    let form = getElement('form');
    if(form.parentNode.firstElementChild.dataset.error) return;

    let errorForm = document.createElement('span');
    errorForm.classList.add('form__error');
    errorForm.classList.add('text-center');
    errorForm.classList.add('radius-12');
    errorForm.innerText = 'Validation error found';
    errorForm.dataset.error = 'invalidForm';
    form.parentNode.insertBefore(errorForm, form);

    let errorDisabled = setTimeout(() => {
        errorForm.remove();
    }, 2000)
}

export {
    successForm,
    invalidForm
}