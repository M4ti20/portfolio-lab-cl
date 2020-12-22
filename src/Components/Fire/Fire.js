import firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyBYIuAvKCWdsxu8VXDDa7EcJwMjgGVdMxs",
    authDomain: "oddaj-rzeczy-f3418.firebaseapp.com",
    projectId: "oddaj-rzeczy-f3418",
    storageBucket: "oddaj-rzeczy-f3418.appspot.com",
    messagingSenderId: "734657018513",
    appId: "1:734657018513:web:eac5dcc4d3f1246a68dd30"
  };

 const fire = firebase.initializeApp(config);
 export default fire;
