// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "realstate-37bf3.firebaseapp.com",
    projectId: "realstate-37bf3",
    storageBucket: "realstate-37bf3.appspot.com",
    messagingSenderId: "961697408060",
    appId: "1:961697408060:web:d66f4fc630598d0ea98f39",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
