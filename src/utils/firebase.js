// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mpFBdFK2gAnTCO3hlFrCe-f12dMyg04",
  authDomain: "netflixx-f960e.firebaseapp.com",
  projectId: "netflixx-f960e",
  storageBucket: "netflixx-f960e.appspot.com",
  messagingSenderId: "81781769552",
  appId: "1:81781769552:web:dd9c5138722fac20155855",
  measurementId: "G-QKKZ0857MF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

