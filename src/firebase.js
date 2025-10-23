// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUD2O_f_Xg40G6veTnA0JDr3LHueDIoVg",
  authDomain: "photon-e79da.firebaseapp.com",
  projectId: "photon-e79da",
  storageBucket: "photon-e79da.firebasestorage.app",
  messagingSenderId: "402169853773",
  appId: "1:402169853773:web:a714602c8285847ecca904",
  measurementId: "G-7THCDXQ0W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)