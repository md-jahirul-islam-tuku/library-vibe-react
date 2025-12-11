// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrae60LhP64CjMZel-NGTLYfIuTZRAFn0",
  authDomain: "library-vibe-react.firebaseapp.com",
  projectId: "library-vibe-react",
  storageBucket: "library-vibe-react.firebasestorage.app",
  messagingSenderId: "1048520213996",
  appId: "1:1048520213996:web:323984afce49b84a492cc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
