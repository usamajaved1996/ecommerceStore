// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdNPmWLSVhpj-gi3zh7HJpxDm6AJr7cMs",
  authDomain: "portfolio-ecommerce-5615a.firebaseapp.com",
  projectId: "portfolio-ecommerce-5615a",
  storageBucket: "portfolio-ecommerce-5615a.appspot.com",
  messagingSenderId: "528785870415",
  appId: "1:528785870415:web:48557def1ca1c2d7e6643a",
  measurementId: "G-1J383JJF2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);