// import React from "react";

// function Cart({ cart, removeFromCart, updateQty }) {

//   // Derived State (Total Price)
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   return (
//     <div style={{ marginTop: "30px" }}>
//       <h2>Cart</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       {cart.map((item) => (
//         <div key={item.id} style={{ marginBottom: "10px" }}>
//           {item.name} x{item.qty} = ${item.price * item.qty}

//           <button onClick={() => updateQty(item.id, 1)}>+</button>
//           <button onClick={() => updateQty(item.id, -1)}>-</button>

//           <button
//             onClick={() => removeFromCart(item.id)}
//             style={{ marginLeft: "10px" }}
//           >
//             ❌
//           </button>
//         </div>
//       ))}

//       <h3>Total = ${total}</h3>
//     </div>
//   );
// }

// export default Cart;


// import React from "react";

// function Cart({ cart, removeFromCart, updateQty }) {

//   // Total Price
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   // Total Items Count
//   const totalItems = cart.reduce(
//     (sum, item) => sum + item.qty,
//     0
//   );

//   return (
//     <div style={{ marginTop: "30px" }}>
//       <h2>Cart</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       {cart.length > 0 && (
//         <>
//           <h3>Total Items: {totalItems}</h3>
//           <h3>Total Price: ${total}</h3>
//         </>
//       )}

//       {cart.map((item) => (
//         <div key={item.id} style={{ marginBottom: "15px" }}>
          
//           <strong>{item.name}</strong>

//           <p>Quantity: {item.qty}</p>

//           <p>
//             ${item.price} × {item.qty} = ${item.price * item.qty}
//           </p>

//           <button onClick={() => updateQty(item.id, 1)}>+</button>

//           <button
//             onClick={() => updateQty(item.id, -1)}
//             disabled={item.qty === 1}
//           >
//             -
//           </button>

//           <button
//             onClick={() => removeFromCart(item.id)}
//             style={{ marginLeft: "10px" }}
//           >
//             ❌
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;


import React from "react";

function Cart({ cart, removeFromCart, updateQty }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div style={{ width: "40%" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 && <p>No items added</p>}

      {cart.length > 0 && (
        <div style={{ marginBottom: "15px" }}>
          <strong>Total Items:</strong> {totalItems} <br />
          <strong>Total Price:</strong> ${total}
        </div>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{item.name}</h3>

          <p>
            ${item.price} × {item.qty} ={" "}
            <strong>${item.price * item.qty}</strong>
          </p>

          <div>
            <button
              onClick={() => updateQty(item.id, 1)}
              style={btnStyle}
            >
              +
            </button>

            <button
              onClick={() => updateQty(item.id, -1)}
              disabled={item.qty === 1}
              style={btnStyle}
            >
              -
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{ ...btnStyle, background: "red" }}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const btnStyle = {
  marginRight: "10px",
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  background: "#28a745",
  color: "white"
};

export default Cart;