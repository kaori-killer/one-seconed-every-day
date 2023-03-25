import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFuvmQ7nOdm6Fw1g-vBalJ7fToYG-q5bs",
    authDomain: "one-second-every-day-68193.firebaseapp.com",
    projectId: "one-second-every-day-68193",
    storageBucket: "one-second-every-day-68193.appspot.com",
    messagingSenderId: "1093880943576",
    appId: "1:1093880943576:web:a2c7a4270e5ac9ae1ad8ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storageService = getStorage(app);
export const dbService = getFirestore(app);