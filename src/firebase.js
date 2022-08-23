import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBYx-nyckSo1UY6itaYyhY2cKZlgGJIPMU",
    authDomain: "todo-list-app-42a89.firebaseapp.com",
    projectId: "todo-list-app-42a89",
    storageBucket: "todo-list-app-42a89.appspot.com",
    messagingSenderId: "514115256414",
    appId: "1:514115256414:web:6961f5f828a0e127a774cf",
    measurementId: "G-4YNC6ED9MR"
}
  


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db ;