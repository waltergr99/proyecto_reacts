
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5wWH4g3xyUJpB4lCw_f-i-EO-D5xGYRU",
  authDomain: "react2022-83eba.firebaseapp.com",
  projectId: "react2022-83eba",
  storageBucket: "react2022-83eba.appspot.com",
  messagingSenderId: "451233917554",
  appId: "1:451233917554:web:488187d92e7e30610130eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);