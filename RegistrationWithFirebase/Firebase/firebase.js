// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjGWlvvDXd59ymlgwMp9efkiU6vs8cxss",
  authDomain: "fir-example-4a4d3.firebaseapp.com",
  databaseURL: "https://fir-example-4a4d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-example-4a4d3",
  storageBucket: "fir-example-4a4d3.appspot.com",
  messagingSenderId: "889539844631",
  appId: "1:889539844631:web:a7feb06427fe9fcdbf5a52",
  measurementId: "G-RV1R8GHLCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);