// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdpZmwThiGgPXsEAa9DJe8rZCRP3GqNe0",
  authDomain: "level4project-7da7d.firebaseapp.com",
  databaseURL: "https://level4project-7da7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "level4project-7da7d",
  storageBucket: "level4project-7da7d.appspot.com",
  messagingSenderId: "87351024118",
  appId: "1:87351024118:web:0127948fcf317201f3cfd7",
  measurementId: "G-0RXQN7H8P8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase();


export const write_to_db = () => {
    console.log("write to db");
    // const db = getDatabase();
    // set(ref(db, 'test/'), {
    //     id: "ThisIsATestWrite",
    // });
        
};