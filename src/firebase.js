// Import the functions you need from the SDKs you need
import "firebase/auth";
import "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1O1eHoF66-EHNZ8f10725N5o1wA7IFsk",
  authDomain: "scissor-short-link.firebaseapp.com",
  projectId: "scissor-short-link",
  storageBucket: "scissor-short-link.appspot.com",
  messagingSenderId: "1046093627736",
  appId: "1:1046093627736:web:bd7cac9bb06c153431e52d",
  measurementId: "G-T0C8E2N6ZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = app.firestore();
const auth = app.auth();

export { app, analytics, auth, firestore };
