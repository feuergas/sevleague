// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbcMoFgYh5I9rpsBIoYiRF7Aci8iN31AA",
    authDomain: "sevleague-2520.firebaseapp.com",
    projectId: "sevleague-2520",
    storageBucket: "sevleague-2520.appspot.com",
    messagingSenderId: "945209601907",
    appId: "1:945209601907:web:b3d5edcc1e86c53e7f9f06",
    measurementId: "G-18SYJ9ZJ3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Analytics = getAnalytics(app);
export const Auth = getAuth(app);
export const DataBase = getFirestore(app);
export default app;