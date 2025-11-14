// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCqmHqmZwveNImkInDpQh4eXVowwIZEpE",
  authDomain: "trackyourprogress-23b12.firebaseapp.com",
  projectId: "trackyourprogress-23b12",
  storageBucket: "trackyourprogress-23b12.firebasestorage.app",
  messagingSenderId: "593638477178",
  appId: "1:593638477178:web:c1ac4fb217eb7657021ac3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);