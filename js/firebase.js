// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtjzC4vR0hTq-zP6JmZtYFhnhaDJnPQWI",
  authDomain: "proposito-jeans.firebaseapp.com",
  projectId: "proposito-jeans",
  storageBucket: "proposito-jeans.firebasestorage.app",
  messagingSenderId: "385946520854",
  appId: "1:385946520854:web:17806ba3e7683c5c1f9437",
  measurementId: "G-6GKYHDN0FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

window.firebaseServices = {
  auth,
  db,
  storage
};