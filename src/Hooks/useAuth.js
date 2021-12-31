import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
