// import { Link } from "react-router-dom";

// function Products() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <Link to="/products/1">Product 1</Link><br />
//       <Link to="/products/2">Product 2</Link>
//     </div>
//   );
// }
// export default Products;


// import { Link } from "react-router-dom";

// export default function Products() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <Link to="/products/1">Product 1</Link><br />
//       <Link to="/products/2">Product 2</Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, img: "https://wrogn.com/cdn/shop/files/WUTS1041S_1.jpg?v=1754396031" },
    { id: 2, name: "Headphones", price: 1999, img: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/o/x/oxn9350130001rino_bts_img_2026_1.png" },
    { id: 3, name: "Shoes", price: 2999, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Smartphone", price: 25000, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWol6sWJNqwHNqoBnBTt479tbY6fpekDNekZr286KetDzwZm5SJzv4oSgb-vgK_kpdxoHnegxNxAZsUkuYxKWXDj98_UNf532F4URq-OLR_aZTx8JFaeNFZg" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍️ Products</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            
            <img src={p.img} alt={p.name} style={styles.image} />

            <h3>{p.name}</h3>
            <p style={styles.price}>₹{p.price}</p>

            <Link to={`/products/${p.id}`}>
              <button style={styles.viewBtn}>View Details</button>
            </Link>

            <button
              style={styles.cartBtn}
              onClick={() => alert(`${p.name} added to cart`)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  viewBtn: {
    marginTop: "10px",
    padding: "8px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cartBtn: {
    marginTop: "5px",
    padding: "8px",
    background: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};