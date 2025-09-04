import {auth} from '../firebase';
import {onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from "firebase/auth";


export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

export function signOutUser() {
  try {
    return signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

export function subscribeAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}