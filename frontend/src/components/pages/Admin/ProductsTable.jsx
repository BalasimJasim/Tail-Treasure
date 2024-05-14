// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import "./adminTable.scss";
// import AdminSideBar from "./AdminSidebar.jsx";
// import { useProductContext } from "../../contexts/ProductContext.jsx";
// import { fetchAllProducts } from "../../../Helpers/fetchProducts.js";

// const ProductsTable = () => {
//   const { deleteProduct } = useProductContext();
//   const [products, setProducts] = useState([]);
//   const [searchProduct, setSearchProduct] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productData = await fetchAllProducts();
//         setProducts(productData);
//         console.log("ProductTable:", productData);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const searchProductHandler = (event) => {
//     setSearchProduct(event.target.value);
//   };

//   const filteredProducts = products.filter((product) =>
//     `${product.title}`.toLowerCase().includes(searchProduct.toLowerCase())
//   );

//   return (
//     <section className="table-container">
//       <AdminSideBar />
//       <div className="table-wrapper">
//         <h1 className="table-title">
//           <input
//             type="text"
//             placeholder="Search by product"
//             value={searchProduct}
//             onChange={searchProductHandler}
//           />
//           <table className="table">
//             <thead className="table-head">
//               <tr>
//                 <th>Count</th>
//                 <th>Product Title</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody className="table-body">
//               {filteredProducts.map((item, index) => (
//                 <tr key={item._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <b> {item.title}</b>
//                   </td>
//                   <td>
//                     <div className="table-button-group">
//                       <button onClick={() => deleteProduct(item._id)}>
//                         Remove Product
//                       </button>
//                       <button>
//                         <a href={`/products/${item._id}`} target="_blank">
//                           View Product
//                         </a>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default ProductsTable;
