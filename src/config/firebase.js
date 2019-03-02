import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCjShH26nMkntuR_QMEcDC8fJ1YZ8RKqZ8",
    authDomain: "season-x-final.firebaseapp.com",
    databaseURL: "https://season-x-final.firebaseio.com",
    projectId: "season-x-final",
    storageBucket: "season-x-final.appspot.com",
    messagingSenderId: "999238962664"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database().ref('records');