import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config";

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // Handle successful sign-in
    console.log("Successfully signed in:", result.user);
    // You can add your navigation or state update logic here
  } catch (error) {
    console.error("Error signing in with Google:", error);
    // Handle error (show error message to user)
  }
};

