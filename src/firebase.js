import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfIqDJDBNhox_XkSsPhd4XL9ZPnRdCu-g",
    authDomain: "clone-7978f.firebaseapp.com",
    databaseURL: "https://clone-7978f-default-rtdb.firebaseio.com",
    projectId: "clone-7978f",
    storageBucket: "clone-7978f.appspot.com",
    messagingSenderId: "380821557722",
    appId: "1:380821557722:web:f082f546cd1617fa2fb0e3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 