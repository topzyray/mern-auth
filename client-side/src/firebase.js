// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-161eb.firebaseapp.com",
  projectId: "mern-auth-161eb",
  storageBucket: "mern-auth-161eb.appspot.com",
  messagingSenderId: "361031365221",
  appId: "1:361031365221:web:1665b2a6616e108c824c8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);