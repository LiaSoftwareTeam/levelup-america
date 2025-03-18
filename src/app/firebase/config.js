import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQHNC2MhPJo7zojpUddmXcmADy8ybu7h4",
  authDomain: "levelupamerica.firebaseapp.com",
  projectId: "levelupamerica",
  storageBucket: "levelupamerica.firebasestorage.app",
  messagingSenderId: "348911045202",
  appId: "1:348911045202:web:2e4456827c9a0b20bfed8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithEmailAndPassword };