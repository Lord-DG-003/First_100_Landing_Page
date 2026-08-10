// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVBMUx7mtm3hJYsuBlb-hEHZ-jV2G_Rpk",
  authDomain: "first100-f2af0.firebaseapp.com",
  projectId: "first100-f2af0",
  storageBucket: "first100-f2af0.firebasestorage.app",
  messagingSenderId: "103270220029",
  appId: "1:103270220029:web:92c08b63fba603c217fe94",
  measurementId: "G-G0ESMHP2YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);