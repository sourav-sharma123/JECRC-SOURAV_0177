// import React from "react";

// function ProductList({ products, addToCart }) {
//   return (
//     <div>
//       <h2>Products</h2>

//       {products.map((p) => (
//         <div key={p.id} style={{ marginBottom: "10px" }}>
//           {p.name} - ${p.price}
//           <button
//             onClick={() => addToCart(p)}
//             style={{ marginLeft: "10px" }}
//           >
//             Add
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;


// import React from "react";

// function ProductList({ products, addToCart }) {
//   return (
//     <div>
//       <h2>Products</h2>

//       {products.map((p) => (
//         <div key={p.id} style={{ marginBottom: "10px" }}>
//           <strong>{p.name}</strong> - ${p.price}

//           <button
//             onClick={() => addToCart(p)}
//             style={{ marginLeft: "10px" }}
//           >
//             Add
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;


import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div style={{ width: "40%" }}>
      <h2>🛍️ Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>

          <button
            onClick={() => addToCart(p)}
            style={{
              padding: "8px 15px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;