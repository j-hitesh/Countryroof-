
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const FirebaseConfig = {
   apiKey: "AIzaSyDDM1Vw61yLpoqS-YUUB5UzvWzgVISOz_w",
  authDomain: "countryroof-babdb.firebaseapp.com",
  databaseURL: "https://countryroof-babdb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "countryroof-babdb",
  storageBucket: "countryroof-babdb.firebasestorage.app",
  messagingSenderId: "830451565152",
  appId: "1:830451565152:web:baa86252e19c568cbdf905",
  measurementId: "G-BGYCFTEG2Z"
};


const app = initializeApp(FirebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase(app);

export const googleProvider = new GoogleAuthProvider();
