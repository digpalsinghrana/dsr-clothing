import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCg5DEfmFnvoU_0UmcZZ2kmsIctNZrIrQk",
    authDomain: "dsr-clothing-db.firebaseapp.com",
    databaseURL: "https://dsr-clothing-db.firebaseio.com",
    projectId: "dsr-clothing-db",
    storageBucket: "dsr-clothing-db.appspot.com",
    messagingSenderId: "181202661634",
    appId: "1:181202661634:web:0f2afb5a93e6dce2dfd21b",
    measurementId: "G-QEHM0Y54FL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

