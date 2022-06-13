import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5e1LVjEK8gdTi2rTd5SLgX34oky4bYtA",
    authDomain: "reader-s-point.firebaseapp.com",
    projectId: "reader-s-point",
    storageBucket: "reader-s-point.appspot.com",
    messagingSenderId: "1073363943906",
    appId: "1:1073363943906:web:f0e966eb50f68cfaf3f9bb",
    measurementId: "G-4FGZX7DVSS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export { auth, provider };
  export default db;