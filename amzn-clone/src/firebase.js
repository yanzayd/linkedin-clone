// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyAkE-Z02N79Z9Fhqkse0ZHirJ609A34tG4",
  authDomain: "e-commerce-76b44.firebaseapp.com",
  projectId: "e-commerce-76b44",
  storageBucket: "e-commerce-76b44.appspot.com",
  messagingSenderId: "913636595968",
  appId: "1:913636595968:web:90a0cc3692b09cd508fbe5",
  measurementId: "G-1PJCPXB2KF"
};

   
    
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();

export {db, auth};
