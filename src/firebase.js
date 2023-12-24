import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEH4YdQ2CEix9lKvvL-XkAqEOnaptQaVE",
  authDomain: "clone-4f2a5.firebaseapp.com",
  projectId: "clone-4f2a5",
  storageBucket: "clone-4f2a5.appspot.com",
  messagingSenderId: "511296596901",
  appId: "1:511296596901:web:51aac015264e1cb7c2d64c",
  measurementId: "G-QV7FC1S0BX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };