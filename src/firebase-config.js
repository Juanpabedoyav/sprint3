import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgvZcYVGX5NeoCzoCAfjR8H-_evPqyR_U",
    authDomain: "as-5426b.firebaseapp.com",
    projectId: "as-5426b",
    storageBucket: "as-5426b.appspot.com",
    messagingSenderId: "200654378105",
    appId: "1:200654378105:web:5fc575a39bd1d6bb6ab0a8",
    measurementId: "G-9CDTSCSP81"
  };

  const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);