import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxE2cHoHh3yTIKr2vS7khfw8_O2c2wobQ",
  authDomain: "madam-lien-v2-authen.firebaseapp.com",
  projectId: "madam-lien-v2-authen",
  storageBucket: "madam-lien-v2-authen.appspot.com",
  messagingSenderId: "851648944872",
  appId: "1:851648944872:web:de7514a31f94e2335a075d",
  measurementId: "G-C6QRN6CTTZ",
});

export const auth = app.auth();
export default app;
