// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLjKjprkWEX3LWzqEgE4R3WlEB4WcHYrU",
    authDomain: "simple-authentication-react.firebaseapp.com",
    projectId: "simple-authentication-react",
    storageBucket: "simple-authentication-react.appspot.com",
    messagingSenderId: "300256019699",
    appId: "1:300256019699:web:6e2de764d9d6ed9b162386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;