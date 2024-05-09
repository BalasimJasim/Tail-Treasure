/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../../../reducer/userReducer";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  isAccountVerified: false,
  userCount: 0,
  isAdmin: false,
  error: null,
};

const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await axios.get("/users");
        const userData = userDataResponse.data;
        dispatch({ type: "LOGIN", payload: { user: userData } });

        const userCountResponse = await axios.get("/users/count");
        const userCount = userCountResponse.data;
        dispatch({ type: "SET_USER_COUNT", payload: userCount });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const token = Cookies.get("token");
      await axios.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await axios.get("/users/count");
      dispatch({ type: "SET_USER_COUNT", payload: response.data });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <UserContext.Provider value={{ state, dispatch, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
