// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "orbitai-9564e.firebaseapp.com",
  projectId: "orbitai-9564e",
  storageBucket: "orbitai-9564e.firebasestorage.app",
  messagingSenderId: "1000059719878",
  appId: "1:1000059719878:web:ca440119188ec31c0107c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()