import React, { Children, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,

  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,

  signOut,
  updateProfile,
 
  
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./Firebase/firebase.init";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userRegister = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  // update profile info
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
    //   Reset password
    const resetPassword = (email) => {
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

  const userInfo = {
    userRegister,
    userSignIn,
    updateUserProfile,
    resetPassword,

    user,
    loading,
    userLogout,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
