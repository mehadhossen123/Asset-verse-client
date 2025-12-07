import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";


const useAuth = () => {
  const userInfo = useContext(AuthContext);
  return userInfo;
};

export default useAuth;
