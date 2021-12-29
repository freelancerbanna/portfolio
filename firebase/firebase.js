import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBKg7zMfjFTi2z1cRiRSdVGnhM2oIQPVZQ",
  authDomain: "hasanul-haque-banna.firebaseapp.com",
  projectId: "hasanul-haque-banna",
  storageBucket: "hasanul-haque-banna.appspot.com",
  messagingSenderId: "835617375923",
  appId: "1:835617375923:web:c9c9a9e52be13049dc92c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
