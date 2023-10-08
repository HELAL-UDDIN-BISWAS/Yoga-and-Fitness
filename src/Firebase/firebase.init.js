// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHLLEQxNArTN4yupQi1cXlblh1SsdsKW8",
  authDomain: "yoga-and-fitness-retreat-1c2b7.firebaseapp.com",
  projectId: "yoga-and-fitness-retreat-1c2b7",
  storageBucket: "yoga-and-fitness-retreat-1c2b7.appspot.com",
  messagingSenderId: "414227465879",
  appId: "1:414227465879:web:c954af7bde06b009fd0bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app