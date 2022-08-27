// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdMW9YjJtwENBfnjM4ffmPb_m5ca_BSAg",
  authDomain: "ema-jhon-react-17454.firebaseapp.com",
  projectId: "ema-jhon-react-17454",
  storageBucket: "ema-jhon-react-17454.appspot.com",
  messagingSenderId: "1082432572462",
  appId: "1:1082432572462:web:ec13492e22bb90881b63bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
