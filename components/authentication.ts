import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPhoneNumber,
    signInWithPopup,
    GoogleAuthProvider,
    RecaptchaVerifier
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithPhoneNumber = (phoneNumber: any, appVerifier: any) => {
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};

export const doSignInWithEmailAndPassword = (email: any, password: any) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // add user to firestore
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email: any) => {
    return sendPasswordResetEmail(auth, email);
};

