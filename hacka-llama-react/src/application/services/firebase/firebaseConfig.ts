import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key as keyof ImportMetaEnv];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const FIREBASE_API_KEY = getEnvVariable('VITE_FIREBASE_API_KEY');
const FIREBASE_AUTH_DOMAIN = getEnvVariable('VITE_FIREBASE_AUTH_DOMAIN');
const FIREBASE_PROJECT_ID = getEnvVariable('VITE_FIREBASE_PROJECT_ID');
const FIREBASE_STORAGE_BUCKET = getEnvVariable('VITE_FIREBASE_STORAGE_BUCKET');
const FIREBASE_MESSAGING_SENDER_ID = getEnvVariable(
  'VITE_FIREBASE_MESSAGING_SENDER_ID'
);
const FIREBASE_APP_ID = getEnvVariable('VITE_FIREBASE_APP_ID');
const FIREBASE_MEASUREMENT_ID = getEnvVariable('VITE_FIREBASE_MEASUREMENT_ID');
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
