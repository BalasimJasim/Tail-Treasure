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

export const userForgotPassword = async (formData) => {
  console.log(formData);
  try {
    await axios.post("/reset/reset", formData);
  } catch (error) {
    console.error("Error in userForgotPassword:", error);
    throw error;
  }
};

export const userResetPassword = async ({ userId, token, password }) => {
  try {
    await axios.post(`/reset/${userId}/reset/${token}`, { password });
  } catch (error) {
    console.error("Error in userResetPassword:", error);
    throw error;
  }
};
