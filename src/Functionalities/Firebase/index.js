// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh7C7L3njc1pJHPszGUUvWzyvLFyPMl9Q",
  authDomain: "craftblogs-b2a19.firebaseapp.com",
  projectId: "craftblogs-b2a19",
  storageBucket: "craftblogs-b2a19.appspot.com",
  messagingSenderId: "330843336037",
  appId: "1:330843336037:web:c2545b995458dcf322858c",
  measurementId: "G-XW5VQHNNX4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);