import firebase from "firebase";

//snippet from firebase website
const firebaseConfig = {
  apiKey: "AIzaSyBn_LCrggpnh_SBryxdunn1s2ojCB9YnzI",
  authDomain: "sabkuah-961f5.firebaseapp.com",
  projectId: "sabkuah-961f5",
  storageBucket: "sabkuah-961f5.appspot.com",
  messagingSenderId: "1026399094433",
  appId: "1:1026399094433:web:61860aad333c5957b6d2e0",
};

//this will bring firebase into the app
//ensure that you have firebase authentication enabled
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize variables
const db = firebaseApp.firestore();
const auth = firebase.auth();

//allows these to be accessible outside
export { db, auth };
