// Firebase configuration (REPLACE WITH YOUR OWN)
const firebaseConfig = {
    apiKey: "AIzaSyAOoM3qgNaV2HrxRBAmrkcJswSu_QHTsy0",
  authDomain: "online-banking-system1.firebaseapp.com",
  projectId: "online-banking-system1",
  storageBucket: "online-banking-system1.firebasestorage.app",
  messagingSenderId: "411135411782",
  appId: "1:411135411782:web:96dc73b1fcf1a9688d2c47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
