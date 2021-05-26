import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyA_JIdf23HIXAzMdmE49ukK_cHatR3HjGU',
    authDomain: 'clone-8d348.firebaseapp.com',
    projectId: 'clone-8d348',
    storageBucket: 'clone-8d348.appspot.com',
    messagingSenderId: '872128832896',
    appId: '1:872128832896:web:0d2a529f1fec766ff10d65',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
