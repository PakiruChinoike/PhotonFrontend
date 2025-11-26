// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseMainConfig = {
  apiKey: "AIzaSyBUD2O_f_Xg40G6veTnA0JDr3LHueDIoVg",
  authDomain: "photon-e79da.firebaseapp.com",
  projectId: "photon-e79da",
  storageBucket: "photon-e79da.firebasestorage.app",
  messagingSenderId: "402169853773",
  appId: "1:402169853773:web:a714602c8285847ecca904",
  measurementId: "G-7THCDXQ0W5"
};

const firebaseStorageConfig = {
  apiKey: "AIzaSyDtR7DWP1LsxkWVh7rUp9PoSha3uclx-mA",
  authDomain: "testearquivos-3d278.firebaseapp.com",
  databaseURL: "https://testearquivos-3d278-default-rtdb.firebaseio.com",
  projectId: "testearquivos-3d278",
  storageBucket: "testearquivos-3d278.appspot.com",
  messagingSenderId: "361560366280",
  appId: "1:361560366280:web:ce1f934e14d19332d299fd"
}

// Initialize Firebase
const mainApp = initializeApp(firebaseMainConfig, "main");
const storageApp = initializeApp(firebaseStorageConfig, "storage");

export const db = getFirestore(mainApp)
export const storage = getStorage(storageApp)