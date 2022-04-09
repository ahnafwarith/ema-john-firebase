// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxEKiW3NuPmm2YJz6P6f7C7AJf1XXEx0M",
    authDomain: "ema-john-simple-68947.firebaseapp.com",
    projectId: "ema-john-simple-68947",
    storageBucket: "ema-john-simple-68947.appspot.com",
    messagingSenderId: "16161596670",
    appId: "1:16161596670:web:abdba9912fce5a9911b1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;