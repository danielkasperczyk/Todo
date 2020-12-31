import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCURZMC4VRZF7vX8PE8wtEFpsjDOm6b2Ig",
    authDomain: "todoapplication-598c8.firebaseapp.com",
    projectId: "todoapplication-598c8",
    storageBucket: "todoapplication-598c8.appspot.com",
    messagingSenderId: "321459737887",
    appId: "1:321459737887:web:043a1a127d58b2b4a18c2a",
    measurementId: "G-RTDYE2XN5G"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

