// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC8ETIAjfrYF9yC63OjIFaS2YTLrY3eN8U",
  authDomain: "resumebuilder-df5c3.firebaseapp.com",
  projectId: "resumebuilder-df5c3",
  storageBucket: "resumebuilder-df5c3.appspot.com",
  messagingSenderId: "703151459488",
  appId: "1:703151459488:web:61dcf8ec53a1fe44224dc5",
  measurementId: "G-DRTK4QETC7"
};

// Initialize Firebase
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const fireAuth = getAuth(app)

export { dataBase, fireAuth }