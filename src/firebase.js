// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCukK2gfAHGu7V-w_5e8nD4nAUSR-jSupQ",
    authDomain: "mockbox-beb64.firebaseapp.com",
    projectId: "mockbox-beb64",
    storageBucket: "mockbox-beb64.appspot.com",
    messagingSenderId: "539195884085",
    appId: "1:539195884085:web:cc34457050d44a1902e77c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



