import React from 'react';
import './App.css';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {Header} from "../common/components/header/Header";
import {Pages} from "../common/components/pages/Pages";
import {NotificationBar} from "../common/components/notification-bar/NotificationBar";
import {InitialLoader} from "../common/components/initial-loader/InitialLoader";

function App() {
  if (false) return <InitialLoader/>
  return (
    <div>
      <Header/>
      <Pages/>
      <NotificationBar/>
    </div>
  )
}

export default App;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3vn_ui_H1RktODYlY_OFq9iDEnEdptmg",
  authDomain: "online-store-48ba7.firebaseapp.com",
  projectId: "online-store-48ba7",
  storageBucket: "online-store-48ba7.appspot.com",
  messagingSenderId: "250819724695",
  appId: "1:250819724695:web:9a4701a54a15e2fadb30d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);