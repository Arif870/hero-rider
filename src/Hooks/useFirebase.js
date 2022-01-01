import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import FirebaseInitialize from "../Firebase/Firebase.init";

FirebaseInitialize();

export const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  ///////////////////////Register
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        // Signed in
        setError("");
        const user = result.user;
        setUser(user);
        console.log("user", user);
      })
      .catch(error => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  // state changed
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    error,
    registerUser,
  };
};
