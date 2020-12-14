import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDw4CKImZ2Vd3qrnqObFrRNIKTL8-a2sLU",
    authDomain: "ecom-db-f4524.firebaseapp.com",
    projectId: "ecom-db-f4524",
    storageBucket: "ecom-db-f4524.appspot.com",
    messagingSenderId: "1022616626281",
    appId: "1:1022616626281:web:ff1b5aecdae68bd44b6ef8",
    measurementId: "G-57KTKG80DE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_accout' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;