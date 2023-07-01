// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

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
const firestore = getFirestore(app);
const auth = getAuth();

if (import.meta.env.MODE === "development") {
  connectFirestoreEmulator(firestore, "localhost", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}

export { app, analytics, auth, firestore };
