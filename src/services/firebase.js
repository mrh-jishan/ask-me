import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBtq9pSnSbf3oxoDN3dXlf9j0MT-qhd6NE",
    authDomain: "ask-me-40b1c.firebaseapp.com",
    databaseURL: "https://ask-me-40b1c.firebaseio.com",
    projectId: "ask-me-40b1c",
    storageBucket: "ask-me-40b1c.appspot.com",
    messagingSenderId: "348443424536",
    appId: "1:348443424536:web:7e5e965885a2484b0f506d",
    measurementId: "G-KDWEP1H31B"
});


const googleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth();

export const db = firebase.firestore();

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}

export const logOut = () => {
    auth.signOut().then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}