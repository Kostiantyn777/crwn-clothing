import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3awxbKNbpZU69_uQTeJL-yA5Wpk1QRpc",
  authDomain: "crwn-db-f40eb.firebaseapp.com",
  projectId: "crwn-db-f40eb",
  storageBucket: "crwn-db-f40eb.appspot.com",
  messagingSenderId: "498428024442",
  appId: "1:498428024442:web:0d00704b3c9b589d874dc3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
