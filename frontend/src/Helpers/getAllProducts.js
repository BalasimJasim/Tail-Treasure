/* eslint-disable no-useless-catch */
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

// export const getAllProducts = async () => {
//   try {
//     const response = await axios.get("/products/products");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getAllProducts = async () => {
//   try {
//     const { data } = await axios.get("/products/products");
//     console.log(data);
//   } catch (error) {
//     console.log("Error fetching product:", error);
//   }
// };
