import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebaseConfig = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebaseConfig;
