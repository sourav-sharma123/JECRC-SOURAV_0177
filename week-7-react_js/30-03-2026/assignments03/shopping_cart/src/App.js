// import React, { useState } from "react";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";

// function App() {
//   const products = [
//     { id: 1, name: "React T-Shirt", price: 25 },
//     { id: 2, name: "Java Hoodie", price: 40 },
//     { id: 3, name: "JS Cap", price: 15 },
//   ];

//   const [cart, setCart] = useState([]);

//   // Add to Cart
//   const addToCart = (product) => {
//     const exist = cart.find((item) => item.id === product.id);

//     if (exist) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   // Remove Item
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Update Quantity
//   const updateQty = (id, amount) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, qty: Math.max(1, item.qty + amount) }
//           : item
//       )
//     );
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>🛒 Shopping Cart</h1>

//       <ProductList products={products} addToCart={addToCart} />
//       <Cart
//         cart={cart}
//         removeFromCart={removeFromCart}
//         updateQty={updateQty}
//       />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";

// function App() {
//   const products = [
//     { id: 1, name: "React T-Shirt", price: 25 },
//     { id: 2, name: "Java Hoodie", price: 40 },
//     { id: 3, name: "JS Cap", price: 15 },
//   ];

//   const [cart, setCart] = useState([]);

//   // Add to Cart
//   const addToCart = (product) => {
//     const exist = cart.find((item) => item.id === product.id);

//     if (exist) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   // Remove Item
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Update Quantity
//   const updateQty = (id, amount) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, qty: Math.max(1, item.qty + amount) }
//           : item
//       )
//     );
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>🛒 Shopping Cart</h1>

//       <ProductList products={products} addToCart={addToCart} />

//       <Cart
//         cart={cart}
//         removeFromCart={removeFromCart}
//         updateQty={updateQty}
//       />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const products = [
    { id: 1, name: "React T-Shirt", price: 25 },
    { id: 2, name: "Java Hoodie", price: 40 },
    { id: 3, name: "JS Cap", price: 15 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQty = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item
      )
    );
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        🛒 Shopping Cart UI
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />
      </div>
    </div>
  );
}

export default App;