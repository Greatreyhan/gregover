import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBJlVizGNjbAkK6L1MGS_IFEeTEVjjzm2Q",
    authDomain: "aldeainnovillage.firebaseapp.com",
    projectId: "aldeainnovillage",
    storageBucket: "aldeainnovillage.appspot.com",
    messagingSenderId: "1069747119717",
    appId: "1:1069747119717:web:4121cc30c59b376d33c88c",
    measurementId: "G-4QX9S616C4"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;