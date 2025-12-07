// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD384jmQj0Im3BoU3DuC_7hdPksrzBBLR4",
  authDomain: "asset-verse-track.firebaseapp.com",
  projectId: "asset-verse-track",
  storageBucket: "asset-verse-track.firebasestorage.app",
  messagingSenderId: "111873681052",
  appId: "1:111873681052:web:1b70be4e3682b13f4b6f59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
