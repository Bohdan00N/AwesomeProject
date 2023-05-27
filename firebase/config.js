import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-mjeitlkEEbjV5itkgetnic2RjrsVmb4",
  authDomain: "react-nativ-project.firebaseapp.com",
  projectId: "react-nativ-project",
  storageBucket: "react-nativ-project.appspot.com",
  messagingSenderId: "381768912986",
  appId: "1:381768912986:web:0e504a3e9791a763cf8863",
  measurementId: "G-0RJTLN875P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
