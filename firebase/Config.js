// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, orderBy} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO7EyzvDheOMRmJMTEqVvu4V0_iSBtYMQ",
  authDomain: "chat-1d4c8.firebaseapp.com",
  projectId: "chat-1d4c8",
  storageBucket: "chat-1d4c8.appspot.com",
  messagingSenderId: "330827565665",
  appId: "1:330827565665:web:c949440582e78242f9b820"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES,
    query,
    onSnapshot,
    orderBy,
};