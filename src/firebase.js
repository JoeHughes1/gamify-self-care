// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBSU7bHd27oPHOVnmLu0chd63-RPFEvvso",
	authDomain: "gamify-self-care.firebaseapp.com",
	projectId: "gamify-self-care",
	storageBucket: "gamify-self-care.appspot.com",
	messagingSenderId: "117626774922",
	appId: "1:117626774922:web:fd5941b478c5e5787a5473",
	measurementId: "G-JXRK6N6MHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
