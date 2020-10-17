import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyTxffKX8McKkOal6rw-kupeoslpL1kh0",
  authDomain: "clone-84560.firebaseapp.com",
  databaseURL: "https://clone-84560.firebaseio.com",
  projectId: "clone-84560",
  storageBucket: "clone-84560.appspot.com",
  messagingSenderId: "147450437797",
  appId: "1:147450437797:web:637f136f971fa871776d4c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };