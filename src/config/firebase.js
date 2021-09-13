import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyDkUiwbKbnppi3xQ_4n9skRZ8X8jQ9uqgE",
  authDomain: "social-media-app-7e0f0.firebaseapp.com",
  projectId: "social-media-app-7e0f0",
  storageBucket: "social-media-app-7e0f0.appspot.com",
  messagingSenderId: "600034039673",
  appId: "1:600034039673:web:21be67c763d159213601a8",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();

export const storageApp = app.storage();
export const authApp = app.auth();
