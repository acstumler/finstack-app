// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';   // For Firebase Authentication
import { getFirestore } from 'firebase/firestore';   // For Firestore database

// Firebase configuration from the Firebase console
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase with the provided config
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Authentication (auth) and Firestore (db) instances
const auth = getAuth(app);  // Firebase Authentication instance
const db = getFirestore(app);  // Firestore instance

export { auth, db };  // Export auth and db to be used in other components
