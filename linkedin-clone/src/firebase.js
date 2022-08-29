import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBNMlhQ4SShDonj7o9dEIoUc1yV7EavDgc",
    authDomain: "linkedin-clone-b6e14.firebaseapp.com",
    projectId: "linkedin-clone-b6e14",
    storageBucket: "linkedin-clone-b6e14.appspot.com",
    messagingSenderId: "146192255577",
    appId: "1:146192255577:web:873c733067373f0608bf48",
    measurementId: "G-JG928YBLKV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  
  export {db, auth}