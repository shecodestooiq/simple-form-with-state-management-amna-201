import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const login = (userData) => {
    setLoggedIn(true);
    setUserInfo(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
