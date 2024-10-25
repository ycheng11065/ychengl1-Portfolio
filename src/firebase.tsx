// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.TP_APP_APIKEY,
  authDomain: process.env.TP_APP_AUTHDOMAIN,
  projectId: process.env.TP_APP_PROJECTID,
  storageBucket: process.env.TP_APP_STORAGEBUCKET,
  messagingSenderId: process.env.TP_APP_MESSAGINGSENDERID,
  appId: process.env.TP_APP_APPID,
  measurementId: process.env.TP_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);