
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXcPvcAgYWDaTuFwWJc7SN0djuaFOF5Ic",
    authDomain: "shopster-project-2dfcf.firebaseapp.com",
    projectId: "shopster-project-2dfcf",
    storageBucket: "shopster-project-2dfcf.appspot.com",
    messagingSenderId: "456812886411",
    appId: "1:456812886411:web:9a0e19bc328a649c76d78e",
    measurementId: "G-RV6V17BHBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};