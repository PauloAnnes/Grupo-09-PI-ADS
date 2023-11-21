
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2ti8StCOkCDfwIeZ9sDnOTqBRz2hofyc",
    authDomain: "projeto-integrador-7f998.firebaseapp.com",
    projectId: "projeto-integrador-7f998",
    storageBucket: "projeto-integrador-7f998.appspot.com",
    messagingSenderId: "16311227625",
    appId: "1:16311227625:web:d5fd7ac5b65ec230960c78",
    measurementId: "G-EZQEZK951Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
