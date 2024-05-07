import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBTu9oIE-hc0gpNH5ubAbmttLwioGLOWXg",
  authDomain: "agriculture-f27e6.firebaseapp.com",
  projectId: "agriculture-f27e6",
  storageBucket: "agriculture-f27e6.appspot.com",
  messagingSenderId: "374715786853",
  appId: "1:374715786853:web:b44b64249195d3eb1e488c",
  databaseURL: "https://agriculture-f27e6-default-rtdb.europe-west1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
const firestore = getFirestore(app);
export { firestore };
export const messaging = getMessaging(app);