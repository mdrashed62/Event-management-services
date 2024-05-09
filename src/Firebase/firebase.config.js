// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVUubFE0_zmCXvzfHLbh0oPxzbuYBoY5o",
  authDomain: "simple-services-client.firebaseapp.com",
  projectId: "simple-services-client",
  storageBucket: "simple-services-client.appspot.com",
  messagingSenderId: "409958801205",
  appId: "1:409958801205:web:f507468d62b031df68767c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;