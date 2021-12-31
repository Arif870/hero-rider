import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FirebaseInitialize from "../Firebase/Firebase.init";

FirebaseInitialize();

export const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const auth = getAuth();

  ///////////////////////Register
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        setError(error.message);
        // ..
      });
  };

  //
  /////////////////////// Login
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    registerUser,
    loginUser,
  };
};
