import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD7AxXcV5Qdv6adoAyKNCQ0HythgAWMDTg",
    authDomain: "assignment-submission-form.firebaseapp.com",
    projectId: "assignment-submission-form",
    storageBucket: "assignment-submission-form.appspot.com",
    messagingSenderId: "755813947907",
    appId: "1:755813947907:web:db6350d39c0f769bc68c36"
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore();

export { firebaseApp, storage, db };