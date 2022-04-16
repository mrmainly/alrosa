import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

export { auth, firestore }