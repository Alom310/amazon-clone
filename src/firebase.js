import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_RM8cuEM7_UbD0Ab0WbUVkZ65LlaCrhQ",
    authDomain: "clone-75070.firebaseapp.com",
    databaseURL: "https://clone-75070.firebaseio.com",
    projectId: "clone-75070",
    storageBucket: "clone-75070.appspot.com",
    messagingSenderId: "831422241444",
    appId: "1:831422241444:web:6d41c8038e18bf73e4a431",
    measurementId: "G-5HYEGQ4YTR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};