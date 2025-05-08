import React, { useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [billAmount, setBillAmount] = useState(10000);
  const [paidList, setPaidList] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  const resetPasseword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const updateUserProfile = (updateName, updatePhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: updateName,
      photoURL: updatePhotoUrl,
    });
  };

  const userInfo = {
    user,
    createUser,
    signInUser,
    signOutUser,

    signInGoogleUser,
    resetPasseword,
    updateUserProfile,
    loading,
    setUser,
    billAmount,
    setBillAmount,
    paidList,
    setPaidList,
  };

  return <Authcontext value={userInfo}>{children}</Authcontext>;
};

export default AuthProvider;
