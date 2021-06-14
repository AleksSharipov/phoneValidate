import firebase from 'firebase';
// const firebase = require("firebase");
// require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA6NqXAyn6Qgq9SdAfedCgzjkx0ex-DiLY",
  authDomain: "phone-book-4d6e9.firebaseapp.com",
  projectId: "phone-book-4d6e9",
  storageBucket: "phone-book-4d6e9.appspot.com",
  messagingSenderId: "560217305518",
  appId: "1:560217305518:web:b87bb83a2409fba585983f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };

