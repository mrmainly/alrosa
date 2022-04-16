import React from 'react';
import ReactDOM from 'react-dom/client';
// import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAVlLfT21Qvx3lhOo_RK4UwkmpG_8QiwVc",
//   authDomain: "alrosa-chat.firebaseapp.com",
//   projectId: "alrosa-chat",
//   storageBucket: "alrosa-chat.appspot.com",
//   messagingSenderId: "984209473907",
//   appId: "1:984209473907:web:5be7554945612fd479c506",
//   measurementId: "G-PYEBNDR0E2"
// };

// const app = initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const firestore = firebase.firestore()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
