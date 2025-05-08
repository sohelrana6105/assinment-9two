// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdj6Yous3uO2qQZQjLMyt6HXvDkMSIu3M",
  authDomain: "assignment-9-9ad1b.firebaseapp.com",
  projectId: "assignment-9-9ad1b",
  storageBucket: "assignment-9-9ad1b.firebasestorage.app",
  messagingSenderId: "114360857129",
  appId: "1:114360857129:web:ca082cb88f8982b9ed6238",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
