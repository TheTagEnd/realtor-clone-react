// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEUscUrJ0gdWW-VniAp4M8pH4WSxYWCs0",
  authDomain: "realtor-clone-react-e56f6.firebaseapp.com",
  projectId: "realtor-clone-react-e56f6",
  storageBucket: "realtor-clone-react-e56f6.appspot.com",
  messagingSenderId: "250829139430",
  appId: "1:250829139430:web:1f5fc35498040ed1b17a27"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export   const db  = getFirestore()