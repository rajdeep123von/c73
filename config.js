import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA0nIcRHy16GKXY-AzDF_QCd7O8nx5WvCw",
  authDomain: "wily-app-12674.firebaseapp.com",
  projectId: "wily-app-12674",
  storageBucket: "wily-app-12674.appspot.com",
  messagingSenderId: "663148244329",
  appId: "1:663148244329:web:a891d7efa82bea50d0a1f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
