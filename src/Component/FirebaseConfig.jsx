
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const FirebaseConfig = {
  apiKey: "AIzaSyA-kPA0lHKfq0540py5gw3bddUDVUzmTWo",
  authDomain: "countryroof-65fe5.firebaseapp.com",
  databaseURL: "https://countryroof-65fe5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "countryroof-65fe5",
  storageBucket: "countryroof-65fe5.firebasestorage.app",
  messagingSenderId: "1089361482732",
  appId: "1:1089361482732:web:bc3a29e4521479cd8f66c9",
  measurementId: "G-Q4Z04Y0LRQ"
};


const app = initializeApp(FirebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
