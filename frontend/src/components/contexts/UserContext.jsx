/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { userReducer } from "../../../reducer/userReducer";

import {
  deleteUserById,
  fetchAllUsers,
  fetchUserCount,
} from "../../Helpers/fetches";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  isAccountVerified: false,
  userCount: 0,
  isAdmin: false,
  error: null,
};
console.log(initialState);
const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [userCount, setUserCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchAllUsers();
        dispatch({ type: "LOGIN", payload: { user: userData } });
        const count = await fetchUserCount();
        setUserCount(count);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (result.isConfirmed) {
        await deleteUserById(userId);
        dispatch({ type: "DELETE_USER", payload: userId });
        const count = await fetchUserCount();
        setUserCount(count);
        Swal.fire({
          title: "User Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete user",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <UserContext.Provider value={{ state, dispatch, deleteUser, userCount }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
