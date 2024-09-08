import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import env from "./envConfig";

const firebaseConfig = {
  apiKey: env.FIREBASE_KEY,
  authDomain: env.FIREBASE_AUTHDOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default { storage };
