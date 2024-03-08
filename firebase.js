import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQhcceNlE17UVBCMQcuX-3duGq9chmQfM",
  authDomain: "notemd-1ba7b.firebaseapp.com",
  databaseURL: "https://notemd-1ba7b-default-rtdb.firebaseio.com",
  projectId: "notemd-1ba7b",
  storageBucket: "notemd-1ba7b.appspot.com",
  messagingSenderId: "817878404015",
  appId: "1:817878404015:web:6d29656ec6cf3feca5bd5a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
