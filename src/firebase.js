import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCkkYs5JoxiKQOL3AzC9kGsWtk7_4mh_WQ",
    authDomain: "digi-db-68ab2.firebaseapp.com",
    projectId: "digi-db-68ab2",
    storageBucket: "digi-db-68ab2.appspot.com",
    messagingSenderId: "1059231079710",
    appId: "1:1059231079710:web:94c673c16ae1e1c8677d0f"
  };
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();


