// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM6iil3_5fY8B1QE0YiGp9ZsPGPMGo9IQ",
  authDomain: "test-5829c.firebaseapp.com",
  projectId: "test-5829c",
  storageBucket: "test-5829c.appspot.com",
  messagingSenderId: "29505354371",
  appId: "1:29505354371:web:fb4e0b46812c95e35a39b6",
  measurementId: "G-YBVD9PBSL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseConfig}