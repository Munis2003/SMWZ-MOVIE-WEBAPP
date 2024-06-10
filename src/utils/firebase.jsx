// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0XnBTtRyBpxShyliDT9WECm9A8xfHxY",
  authDomain: "smwz-0110.firebaseapp.com",
  projectId: "smwz-0110",
  storageBucket: "smwz-0110.appspot.com",
  messagingSenderId: "270545510604",
  appId: "1:270545510604:web:5821a74e53eab79fdc2269",
  measurementId: "G-LC5FLV0J44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();