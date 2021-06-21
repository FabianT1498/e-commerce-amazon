import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAK1hW6raAYf5e1GTHK555EBUppJONI8tE",
    authDomain: "e-commerce-5d98a.firebaseapp.com",
    projectId: "e-commerce-5d98a",
    storageBucket: "e-commerce-5d98a.appspot.com",
    messagingSenderId: "15940584140",
    appId: "1:15940584140:web:3b5cf55482158df35cb869"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }