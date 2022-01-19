
  
//Importas la funcion de incializacion de la app
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGKy9ANBMlbtSyp1xqcR-MoqTL_bij2mY",
    authDomain: "react-giraldo-rojas.firebaseapp.com",
    projectId: "react-giraldo-rojas",
    storageBucket: "react-giraldo-rojas.appspot.com",
    messagingSenderId: "771464100501",
    appId: "1:771464100501:web:067aa8bc7d6a6654edf99c",
    measurementId: "G-Z53BMXLLX4"
  };


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)