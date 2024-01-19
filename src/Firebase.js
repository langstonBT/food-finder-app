// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
/*
const db = getFirestore(app)
const notesCollection = collection(db,"notes")
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD5ZdMxVSpKQ55aJHD0hZXdB_j3pu05kc0",
  authDomain: "foodfindersproject.firebaseapp.com",
  projectId: "foodfindersproject",
  storageBucket: "foodfindersproject.appspot.com",
  messagingSenderId: "173998795907",
  appId: "1:173998795907:web:6929eed03cad3208afbfb6",
  measurementId: "G-MQXN34PXL0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);