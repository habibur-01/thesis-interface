// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUt-C4GCBCHgh7t2QrNnXnb3y_id6Rw9A",
  authDomain: "thesis-42210.firebaseapp.com",
  projectId: "thesis-42210",
  storageBucket: "thesis-42210.appspot.com",
  messagingSenderId: "1009488846028",
  appId: "1:1009488846028:web:26b9e6809cec5c88893669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default(auth)