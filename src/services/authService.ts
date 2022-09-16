import { initializeApp } from 'firebase/app';
import Config from 'react-native-config';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
  appId: Config.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export function registerUser(username: string, password: string): Promise<void | UserCredential> {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      console.log(userCredential);

      return userCredential;
    })
    .catch((error) => {
      console.log(error);
    });
}
