import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDLmQTMAdktM4TYnvkPMME07s0HmQ7vgos",
  authDomain: "farmconnect-f0274.firebaseapp.com",
  databaseURL: "https://farmconnect-f0274-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "farmconnect-f0274",
  storageBucket: "farmconnect-f0274.appspot.com",
  messagingSenderId: "163253489194",
  appId: "1:163253489194:web:b45d2c9281a5d212f5bd53"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
const firestore = getFirestore(app);
export { firestore };
export const messaging = getMessaging(app);