import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAnalytics} from 'firebase/analytics'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDDqkKBnSfg2TzuAONb8iMRfjVZKGLOIz8",
  authDomain: "portfoliotracker-a0ab0.firebaseapp.com",
  projectId: "portfoliotracker-a0ab0",
  storageBucket: "portfoliotracker-a0ab0.appspot.com",
  messagingSenderId: "821443090524",
  appId: "1:821443090524:web:695f07fb9405f84e942e99",
  measurementId: "G-B1EC830XNV"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyB94p8NXVz40bQNpn45C8S5j08_zDEkoYs",
//   authDomain: "portfoliotrack2.firebaseapp.com",
//   projectId: "portfoliotrack2",
//   storageBucket: "portfoliotrack2.appspot.com",
//   messagingSenderId: "691173073797",
//   appId: "1:691173073797:web:cc7c335e897e7ac1fedaec"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
const fireAuth = getAuth(app)

export {dataBase , fireAuth}