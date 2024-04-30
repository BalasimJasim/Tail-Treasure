/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
