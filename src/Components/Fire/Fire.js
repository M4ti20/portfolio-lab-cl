import firebase from "firebase";
  
var firebaseConfig = {
  apiKey: "AIzaSyBlqe_NH75qyoCr5Jjr7uJ6WyZSNtTfxKU",
  authDomain: "login-22821.firebaseapp.com",
  databaseURL: "https://login-22821.firebaseio.com",
  projectId: "login-22821",
  storageBucket: "login-22821.appspot.com",
  messagingSenderId: "726784084047",
  appId: "1:726784084047:web:7cbb7958b101c6da0ac23a"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;