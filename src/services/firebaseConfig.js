import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVAO7Yx_e3yORqZYkJ6D6YEXC_yxNNXGk",
  authDomain: "companion-c512c.firebaseapp.com",
  projectId: "companion-c512c",
  storageBucket: "companion-c512c.appspot.com",
  messagingSenderId: "905784933186",
  appId: "1:905784933186:android:d74b22027e3fce5b38a6db",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
