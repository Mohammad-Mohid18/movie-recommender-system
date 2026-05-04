// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBJF2RB64m6loJ2FJV4yS88JEA_B4qU4Aw",
//   authDomain: "movies-recomender.firebaseapp.com",
//   projectId: "movies-recomender",
//   storageBucket: "movies-recomender.firebasestorage.app",
//   messagingSenderId: "466010320787",
//   appId: "1:466010320787:web:a3bea5059f7a1ab5c04266",
//   measurementId: "G-BH8W6HR756"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

console.log("Firebase Loaded");

const firebaseConfig = {
  apiKey: "AIzaSyBJF2RB64m6loJ2FJV4yS88JEA_B4qU4Aw",
  authDomain: "movies-recomender.firebaseapp.com",
  projectId: "movies-recomender",
  storageBucket: "movies-recomender.appspot.com",
  messagingSenderId: "466010320787",
  appId: "1:466010320787:web:a3bea5059f7a1ab5c04266"
};

// Initialize Firebase (v8 style)
firebase.initializeApp(firebaseConfig);

// Make global
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase Initialized");