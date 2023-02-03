import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWPdKbaRXfpDu4-gXmG0OnGJBpQ105ahE",
  authDomain: "dashboard-2e281.firebaseapp.com",
  projectId: "dashboard-2e281",
  storageBucket: "dashboard-2e281.appspot.com",
  messagingSenderId: "680655032435",
  appId: "1:680655032435:web:0ef7cce1f0bb10d7a29a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
