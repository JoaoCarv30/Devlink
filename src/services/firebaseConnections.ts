
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRfTIQjlAcrUFTyBm29KDSo5CghqtJWPs",
  authDomain: "reactlinks-d9453.firebaseapp.com",
  projectId: "reactlinks-d9453",
  storageBucket: "reactlinks-d9453.appspot.com",
  messagingSenderId: "902047382003",
  appId: "1:902047382003:web:8cb6b845649cbb750a7a86"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}