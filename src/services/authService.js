// authService.js
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInAnonymously,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase/Firebase";

const signup = async (email, password, name, photoURL) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: name, photoURL: photoURL || null });
  return userCredential.user;
};

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

const loginAsGuest = async () => {
  const result = await signInAnonymously(auth);
  return result.user;
};

const logout = async () => {
  await signOut(auth);
};

export { signup, login, loginWithGoogle, loginAsGuest, logout };
