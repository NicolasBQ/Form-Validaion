import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getElement } from ".";

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
        console.log(name);
    } catch(e) {
        console.log('ERROR');
    }
}

export {
    successForm,
}