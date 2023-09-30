import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCmHTEQ0RToV82LWlh9QhezsHQ_5md1kbs',
    authDomain: 'bazarapp-89dd2.firebaseapp.com',
    projectId: 'bazarapp-89dd2',
    storageBucket: 'bazarapp-89dd2.appspot.com',
    messagingSenderId: '647244500765',
    appId: '1:647244500765:web:dafd0b725e2e3613309bf4',
}
//init firebase
const app = initializeApp(firebaseConfig)

//init servies
const db = getFirestore()
const auth = getAuth(app)
const storage = getStorage(app)
const Timestamp = serverTimestamp()
export { db, auth, storage, Timestamp }
