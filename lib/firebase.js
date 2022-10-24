import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD6B2e5-x0mMWnCOhOyPDX3RM6VHZPs_JY",
    authDomain: "fuelyourfriends.firebaseapp.com",
    projectId: "fuelyourfriends",
    storageBucket: "fuelyourfriends.appspot.com",
    messagingSenderId: "520547152117",
    appId: "1:520547152117:web:a793ef42260250a96155bc",
    measurementId: "G-YPT9T0HZWZ"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const storage = firebase.storage();