// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeRwR8N0JVA5BDPr1_3MVmRX8S1Ed-UdM",
  authDomain: "finstack-app.firebaseapp.com",
  projectId: "finstack-app",
  storageBucket: "finstack-app.appspot.com",
  messagingSenderId: "254799215682",
  appId: "1:254799215682:web:717dfd5f40fe07a24481db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
