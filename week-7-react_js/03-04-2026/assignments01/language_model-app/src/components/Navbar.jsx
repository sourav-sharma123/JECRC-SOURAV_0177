// import LanguageSelector from "./LanguageSelector";

// export default function Navbar() {
//   return (
//     <div style={styles.nav}>
//       <h2>🌍 Enterprise App</h2>
//       <LanguageSelector />
//     </div>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "15px 30px",
//     background: "#0f172a",
//     color: "white",
//   },
// };


import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>🌍 Global Enterprise App</h2>
      <LanguageSelector />
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111827",
    color: "white",
  },
};