import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJaQNmbSBYSUzVaOrdPUog1ROk5ts-5x0",
    authDomain: "digiverse-blog-db.firebaseapp.com",
    projectId: "digiverse-blog-db",
    storageBucket: "digiverse-blog-db.appspot.com",
    messagingSenderId: "853543022184",
    appId: "1:853543022184:web:d891c7003e08375f0255dd"
  };
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();


