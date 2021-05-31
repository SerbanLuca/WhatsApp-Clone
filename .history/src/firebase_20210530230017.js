import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB4ZvBWu_rAxKPXod_DsLISLqe5YUD28WM",
  authDomain: "wapp-fake.firebaseapp.com",
  projectId: "wapp-fake",
  storageBucket: "wapp-fake.appspot.com",
  messagingSenderId: "681643835963",
  appId: "1:681643835963:web:abf744a2b6802c308a921e",
  measurementId: "G-DDZENRGQ4K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
cont db = firebase.firestore()
cont auth = firebase.auth()
cont provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider} 
export default db;