import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6yhKR7-sr25iXLGoBbp6pOn84PdUBSXU",
    authDomain: "clone-b29f1.firebaseapp.com",
    projectId: "clone-b29f1",
    storageBucket: "clone-b29f1.appspot.com",
    messagingSenderId: "626116196765",
    appId: "1:626116196765:web:d4d78815da50c924991774",
    measurementId: "G-EB22LSDZY0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }