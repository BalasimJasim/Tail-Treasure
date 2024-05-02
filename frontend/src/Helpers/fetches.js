import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
export const userRegisterApi = async (formData) => {
  axios.post("/auth/register", formData);
};

export const userLoginApi = async (loginObj) => {
  try {
    return await axios.post("/auth/login", loginObj);
  } catch (error) {
    console.error("Error in userLoginApi:", error);
    throw error;
  }
};
