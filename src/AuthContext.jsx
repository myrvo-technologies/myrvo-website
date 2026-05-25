import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider, isFirebaseConfigured } from "./firebase.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    user,
    loading,
    isFirebaseConfigured,
    signup: async (email, password, name) => {
      if (!isFirebaseConfigured) throw new Error("Firebase is not configured. See README.");
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
      return cred.user;
    },
    login: async (email, password) => {
      if (!isFirebaseConfigured) throw new Error("Firebase is not configured. See README.");
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return cred.user;
    },
    loginWithGoogle: async () => {
      if (!isFirebaseConfigured) throw new Error("Firebase is not configured. See README.");
      const cred = await signInWithPopup(auth, googleProvider);
      return cred.user;
    },
    logout: async () => {
      if (!isFirebaseConfigured) return;
      await signOut(auth);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
