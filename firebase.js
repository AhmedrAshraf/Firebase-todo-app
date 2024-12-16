import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js'
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy,} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyDvUXutDoItu4FhLYAFNTDyYwFOQ6V3Q0Q",
  authDomain: "my-awesome-project-56968.firebaseapp.com",
  projectId: "my-awesome-project-56968",
  storageBucket: "my-awesome-project-56968.firebasestorage.app",
  messagingSenderId: "652084552626",
  appId: "1:652084552626:web:2bc4405e8fbdf373a1baab",
  measurementId: "G-E1E4RT66HY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy,}
