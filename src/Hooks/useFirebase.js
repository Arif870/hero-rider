import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
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
      .then(result => {
        // Signed in
        const user = result;
        setUser(user);
        // ...
        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch(error => {
            // An error occurred
            // ...
          });

        console.log(email, password);
      })
      .catch(error => {
        setError(error.message);
        // ..
      });
  };

  // state changed
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
  }, []);
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
