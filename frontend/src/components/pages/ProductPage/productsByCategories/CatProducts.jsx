// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export const CatProducts = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (category) {
//       getProductsByCategory(category);
//     }
//   }, [category]);

//   const getProductsByCategory = async (category) => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5000/products?category=${category}`
//       );
//       console.log("productsCat:", data);
//       setProducts(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="CatProducts">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <Link key={product._id} to={`/products/${product._id}`}>
//             <div className="card m-4" style={{ width: "20rem" }}>
//               <img
//                 src={product.image}
//                 style={{ width: "250px", display: "block", margin: "auto" }}
//                 className="card-img-top"
//                 alt="..."
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text" style={{ textAlign: "right" }}>
//                   Price: {product.price}€
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))
//       ) : (
//         <div>No products found for this category</div>
//       )}
//     </div>
//   );
// };

// // export const fetchProductsByCategory = async (category) => {
// //   try {
// //     const { data } = await axios.get(
// //       `http://localhost:5000/products?category=${category}`
// //     );
// //     return data.data;
// //   } catch (error) {
// //     console.log(error);
// //     return [];
// //   }
// // };
