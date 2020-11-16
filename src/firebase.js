import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDSc_eZGvnnYI6-__wA3p0Ej2r09u1CPro",
    authDomain: "fbstoragepract.firebaseapp.com",
    databaseURL: "https://fbstoragepract.firebaseio.com",
    projectId: "fbstoragepract",
    storageBucket: "fbstoragepract.appspot.com",
    messagingSenderId: "1031250642209",
    appId: "1:1031250642209:web:aa26bb2dbb2c8aa0b46a60",
    measurementId: "G-XC9X9N5MHS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;


