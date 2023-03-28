import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3vn_ui_H1RktODYlY_OFq9iDEnEdptmg",
  authDomain: "online-store-48ba7.firebaseapp.com",
  projectId: "online-store-48ba7",
  storageBucket: "online-store-48ba7.appspot.com",
  messagingSenderId: "250819724695",
  appId: "1:250819724695:web:9a4701a54a15e2fadb30d2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)