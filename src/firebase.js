// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase"
import { FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwSeO_qOeeGPErwnANCdoWkgjC2x0Fd_M",
  authDomain: "disney-clone-6457c.firebaseapp.com",
  projectId: "disney-clone-6457c",
  storageBucket: "disney-clone-6457c.appspot.com",
  messagingSenderId: "635716068344",
  appId: "1:635716068344:web:e0224d75d42746217fac0d",
  measurementId: "G-3TBDHS3HTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.fireStore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();