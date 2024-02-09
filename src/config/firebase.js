import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyADrZ_I753iHLbgysm-8nW3uxC0fBlh-s0",
  authDomain: "tiktok-jornada-dev-fed64.firebaseapp.com",
  projectId: "tiktok-jornada-dev-fed64",
  storageBucket: "tiktok-jornada-dev-fed64.appspot.com",
  messagingSenderId: "808095503727",
  appId: "1:808095503727:web:ab4522bb7ee2e6e063449a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
