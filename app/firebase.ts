import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TAVA_API_KEY",
  authDomain: "TAVA_DOMAIN",
  projectId: "TAVA_PROJECT_ID",
  storageBucket: "TAVA_BUCKET",
  messagingSenderId: "TAVA_ID",
  appId: "TAVA_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;