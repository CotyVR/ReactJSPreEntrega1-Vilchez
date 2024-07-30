// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8B8E2qYmplzk_6FxcCWS81S58jqGyWqE",
  authDomain: "primer-ecommerce-eeb0d.firebaseapp.com",
  projectId: "primer-ecommerce-eeb0d",
  storageBucket: "primer-ecommerce-eeb0d.appspot.com",
  messagingSenderId: "851385740250",
  appId: "1:851385740250:web:6e9dacbef680a5da8aeee3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
