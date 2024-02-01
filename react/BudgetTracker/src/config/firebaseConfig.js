// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vJexqic-NxIu7b-qHG2hIZphEQWC6r4",
  authDomain: "budgettracker-da8ed.firebaseapp.com",
  projectId: "budgettracker-da8ed",
  storageBucket: "budgettracker-da8ed.appspot.com",
  messagingSenderId: "614445669983",
  appId: "1:614445669983:web:8b064104da606bd25ec5ea",
  measurementId: "G-D6NSGN00DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)
const fireAuth = getAuth(app)

export { dataBase, fireAuth }


//! Fetch information syntax : 

// const fetch(name)Async = async() => {
//   const response = await fetch(url)
//   const waitForData = await res.json()
// }
// 