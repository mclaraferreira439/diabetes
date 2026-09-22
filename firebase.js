import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAupl6gTo_yFQl3W5OBvLwbYwBfMwHrJTU",
    authDomain: "monitoramento-de-diabetes.firebaseapp.com",
    projectId: "monitoramento-de-diabetes",
    storageBucket: "monitoramento-de-diabetes.firebasestorage.app",
    messagingSenderId: "1062979233029",
    appId: "1:1062979233029:web:d2cd0f1862f728e452c36c",
    measurementId: "G-BY64K2LPXT"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);