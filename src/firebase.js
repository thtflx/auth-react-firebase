import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCKEIfYf85dCj1KML4ATkZd8pyGXyQca0Q",
    authDomain: "mockbox-39273.firebaseapp.com",
    projectId: "mockbox-39273",
    storageBucket: "mockbox-39273.appspot.com",
    messagingSenderId: "382317174227",
    appId: "1:382317174227:web:510374a257dc25132a2326"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
