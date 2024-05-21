// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBK2YDoO2Z9WlmABzkjiVQjnNaFR3qPxg",
  authDomain: "auth-moha-milon-caa9c.firebaseapp.com",
  projectId: "auth-moha-milon-caa9c",
  storageBucket: "auth-moha-milon-caa9c.appspot.com",
  messagingSenderId: "585028787293",
  appId: "1:585028787293:web:edc9b01e096524b08141b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
