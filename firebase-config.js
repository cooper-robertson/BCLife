import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2TO6OtnVecAJVdZJWEXw1H7SPdWXGMUM",
  authDomain: "cooper-bradley-site.firebaseapp.com",
  projectId: "cooper-bradley-site",
  storageBucket: "cooper-bradley-site.firebasestorage.app",
  messagingSenderId: "522642134543",
  appId: "1:522642134543:web:8d860148e30d56672f757a",
  measurementId: "G-Q6XTEMDTS1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
