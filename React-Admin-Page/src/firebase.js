// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHmRrtCDSr1k2KDQc8hYCL3S5cHvFcufw",
  authDomain: "movieapp-bc3de.firebaseapp.com",
  projectId: "movieapp-bc3de",
  storageBucket: "movieapp-bc3de.appspot.com",
  messagingSenderId: "587497612279",
  appId: "1:587497612279:web:b8e070e088c3a31d3344f2",
  measurementId: "G-44QBQXDQBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;
