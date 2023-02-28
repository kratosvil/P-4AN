// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJb10YPi0Dg_Dd6VRwMIoGWpCl93MpUA",
  authDomain: "p-4an-49f4a.firebaseapp.com",
  projectId: "p-4an-49f4a",
  storageBucket: "p-4an-49f4a.appspot.com",
  messagingSenderId: "729688835744",
  appId: "1:729688835744:web:bf5471a6082627e0be6bc5",
  measurementId: "G-PY8HJGCJ1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function Login(){
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
    console.log(email)
}
