// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD81L8NwMbqO63Wu_yCs3zqu192XGvUllo",
  authDomain: "lerd-ai-prep-coach.firebaseapp.com",
  projectId: "lerd-ai-prep-coach",
  storageBucket: "lerd-ai-prep-coach.firebasestorage.app",
  messagingSenderId: "137823600037",
  appId: "1:137823600037:web:9d5ae5349b04dbecab7c4c",
  measurementId: "G-7MC7BL7684",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
