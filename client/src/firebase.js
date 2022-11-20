// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAizeNL1KITBVCX3EgyazB-Yc8XD6rQh8Q",
  authDomain: "chitra-85cc7.firebaseapp.com",
  projectId: "chitra-85cc7",
  storageBucket: "chitra-85cc7.appspot.com",
  messagingSenderId: "958365208746",
  appId: "1:958365208746:web:f2ef295e6a9f0c8f9580d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
