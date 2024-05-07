/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer } from "react";
import { userReducer } from "../../../reducer/userReducer";

const initialState = {
  user: null,
  isAccountVerified: false,
  error: null,
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
