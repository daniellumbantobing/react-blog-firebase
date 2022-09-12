// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNbyBbm87XZTICaG53qAYE-FS_a0ylzug",
  authDomain: "fluid-etching-326405.firebaseapp.com",
  projectId: "fluid-etching-326405",
  storageBucket: "fluid-etching-326405.appspot.com",
  messagingSenderId: "89949954730",
  appId: "1:89949954730:web:9ec55525e14e1bbad7a6d3",
  measurementId: "G-WDJZELVLL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
