// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div style={styles.sidebar}>
//       <h3>Dashboard</h3>
//       <Link to="/dashboard">Home</Link><br />
//       <Link to="/dashboard/analytics">Analytics</Link><br />
//       <Link to="/dashboard/settings">Settings</Link>
//     </div>
//   );
// }

// const styles = {
//   sidebar: {
//     width: "200px",
//     background: "#ddd",
//     padding: "20px",
//     height: "100vh"
//   }
// };

// export default Sidebar;


import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>Dashboard</h3>
      <Link to="/dashboard">Home</Link><br />
      <Link to="/dashboard/analytics">Analytics</Link><br />
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#ddd",
    padding: "20px",
    height: "100vh"
  }
};

export default Sidebar;