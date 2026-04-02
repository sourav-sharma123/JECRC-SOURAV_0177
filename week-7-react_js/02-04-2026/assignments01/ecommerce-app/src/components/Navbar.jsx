// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div style={styles.nav}>
//       <h2>🛒 E-Commerce</h2>
//       <div>
//         <Link to="/">Home</Link> | 
//         <Link to="/about"> About</Link> | 
//         <Link to="/contact"> Contact</Link> | 
//         <Link to="/products"> Products</Link> | 
//         <Link to="/login"> Login</Link>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "15px",
//     background: "#4aeb3b",
//     color: "white"
//   }
// };

// export default Navbar;


import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.navbar}>
      
      {/* Logo */}
      <h2 style={styles.logo}>🛒 ShopEasy</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        style={styles.search}
      />

      {/* Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/products" style={styles.link}>Products</Link>
      </div>

      {/* Right Section */}
      <div style={styles.right}>
        <Link to="/login">
          <button style={styles.loginBtn}>Login</button>
        </Link>

        <span style={styles.cart}>🛒 Cart</span>
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 20px",
    background: "#2874f0", // Flipkart blue
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    margin: 0,
    cursor: "pointer",
  },

  search: {
    width: "30%",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },

  links: {
    display: "flex",
    gap: "15px",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  loginBtn: {
    padding: "6px 12px",
    background: "white",
    color: "#2874f0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cart: {
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default Navbar;



