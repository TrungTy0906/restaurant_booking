// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF2KFsPgd_BbJfH22IGb0aUy4nDV9J3So",
  authDomain: "foodgo-2daee.firebaseapp.com",
  projectId: "foodgo-2daee",
  storageBucket: "foodgo-2daee.firebasestorage.app",
  messagingSenderId: "331103372686",
  appId: "1:331103372686:web:2f23dbcf02307e57dd10df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);