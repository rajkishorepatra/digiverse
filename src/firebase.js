import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZ3izCEgcQFU7bzo7vVG1mwLBMeEM_4Uo",
  authDomain: "digi-db2.firebaseapp.com",
  projectId: "digi-db2",
  storageBucket: "digi-db2.appspot.com",
  messagingSenderId: "671907352047",
  appId: "1:671907352047:web:4e595a1c8ee0f501313a1a"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();


