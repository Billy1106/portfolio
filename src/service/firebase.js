import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAElY86-RYP6Vj53M2z9qEKuITNKfUz0jY",
  authDomain: "portfolio-contact-form-82667.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-82667-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-form-82667",
  storageBucket: "portfolio-contact-form-82667.appspot.com",
  messagingSenderId: "960697341116",
  appId: "1:960697341116:web:8f2f30cfabc5a61f5e2cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);;
console.log(db)

export { db };