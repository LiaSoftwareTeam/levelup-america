import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkj8LLSALwoPJoXk7G9PwU4VnrYDXoCA0",
  authDomain: "vivelupamerica.firebaseapp.com",
  projectId: "vivelupamerica",
  storageBucket: "vivelupamerica.firebasestorage.app",
  messagingSenderId: "77705325971",
  appId: "1:77705325971:web:8d4cb0958e4d1ed7da0c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithEmailAndPassword };