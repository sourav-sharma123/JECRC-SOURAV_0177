import { Link } from "react-router-dom";
function Footer() {
  return (
    <div style={styles.footer}>
      <p>© 2026 E-Commerce App</p>
    </div>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#eee"
  }
};

export default Footer;