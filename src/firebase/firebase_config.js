import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, getDocs, doc, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGINSENDERID,
    appId: process.env.REACT_APP_FIREBASE_FIREBASE_APPIID
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
}

export default db