// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyARrUEihfjCGyglLhgfd3avaWzogDv4eLg",
    authDomain: "aesura-5dab4.firebaseapp.com",
    projectId: "aesura-5dab4",
    storageBucket: "aesura-5dab4.firebasestorage.app",
    messagingSenderId: "849936457041",
    appId: "1:849936457041:web:e1d1cd9713bc2c90354770",
    measurementId: "G-620Q1MK7TD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
export const db: Firestore = getFirestore(firebaseApp);