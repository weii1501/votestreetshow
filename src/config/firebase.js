// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVtW3l_WYUMa8CaxnffMiHYHNRiu72C40",
    authDomain: "vote-app-e055a.firebaseapp.com",
    databaseURL: "https://vote-app-e055a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vote-app-e055a",
    storageBucket: "vote-app-e055a.appspot.com",
    messagingSenderId: "66504172569",
    appId: "1:66504172569:web:035e32ce122d8d0b867688",
    measurementId: "G-DMB09V2XCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)