// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbKC3K4xS8fO3HjqQ0lRuAP4mLjM-eHCc",
  authDomain: "vinube-86460.firebaseapp.com",
  projectId: "vinube-86460",
  storageBucket: "vinube-86460.appspot.com",
  messagingSenderId: "681087439251",
  appId: "1:681087439251:web:46c222d6b2224fc3409866"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;