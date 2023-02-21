// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const firebaseApp = initializeApp({ /* config */ });
// const auth = getAuth();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD458kslIR0RWtPEvABCoh2dEQKYoFr_0E",
    authDomain: "todo-list-dcb16.firebaseapp.com",
    projectId: "todo-list-dcb16",
    storageBucket: "todo-list-dcb16.appspot.com",
    messagingSenderId: "518665455886",
    appId: "1:518665455886:web:a083851b10847701d2af5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = app.auth();
export default app;