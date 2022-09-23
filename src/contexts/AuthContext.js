import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  
    const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={
      {auth,setAuth}
      }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;