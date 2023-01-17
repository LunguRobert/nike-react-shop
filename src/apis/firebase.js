import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../configs/firebase";

firebase.initializeApp(firebaseConfig);

var providerGoogle = new firebase.auth.GoogleAuthProvider();

var providerFacebook = new firebase.auth.FacebookAuthProvider();

export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(providerGoogle);
}

export function signInWithFacebook() {
  return firebase.auth().signInWithPopup(providerFacebook);
}

export function signOut() {
  return firebase.auth().signOut();
}
