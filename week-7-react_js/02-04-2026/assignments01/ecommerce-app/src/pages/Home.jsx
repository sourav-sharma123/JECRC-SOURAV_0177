// export default function Home() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>🏠 Home Page</h1>
//       <p>Welcome to our E-Commerce App</p>
//     </div>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [search, setSearch] = useState("");

    const products = [
        { id: 1, name: "React T-Shirt", price: 499, img: "https://wrogn.com/cdn/shop/files/WUTS1041S_1.jpg?v=1754396031" },
        { id: 2, name: "Laptop", price: 50000, img: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/o/x/oxn9350130001rino_bts_img_2026_1.png" },
        { id: 3, name: "Headphones", price: 1999, img: "data:image/webp;base64,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" },
        { id: 4, name: "Shoes", price: 2999, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWol6sWJNqwHNqoBnBTt479tbY6fpekDNekZr286KetDzwZm5SJzv4oSgb-vgK_kpdxoHnegxNxAZsUkuYxKWXDj98_UNf532F4URq-OLR_aZTx8JFaeNFZg" },
    ];

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={styles.container}>

            {/* 🔥 Header */}
            <h1 style={styles.title}>🛒 Welcome to E-Commerce Store</h1>

            {/* 🔍 Search */}
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.search}
            />

            {/* 🛍️ Product Grid */}
            <div style={styles.grid}>
                {filteredProducts.map((p) => (
                    <div key={p.id} style={styles.card}>

                        <img src={p.img} alt={p.name} style={styles.image} />

                        <h3>{p.name}</h3>
                        <p>₹{p.price}</p>

                        {/* 🔗 View Details */}
                        <Link to={`/products/${p.id}`}>
                            <button style={styles.btn}>View</button>
                        </Link>

                        {/* 🛒 Add to Cart (UI only) */}
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
        textAlign: "center",
    },
    title: {
        marginBottom: "20px",
    },
    search: {
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
    },
    card: {
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        transition: "0.3s",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    btn: {
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
        background: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};