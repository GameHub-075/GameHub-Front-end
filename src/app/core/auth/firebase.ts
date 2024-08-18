// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDI7eQoB4mddQwn25qAyb2mPrleeSCjaw8",
    authDomain: "gamehub-3b18f.firebaseapp.com",
    projectId: "gamehub-3b18f",
    storageBucket: "gamehub-3b18f.appspot.com",
    messagingSenderId: "160017247247",
    appId: "1:160017247247:web:69b167eb82bd4165d7877a",
    measurementId: "G-PRH9K1NSKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);