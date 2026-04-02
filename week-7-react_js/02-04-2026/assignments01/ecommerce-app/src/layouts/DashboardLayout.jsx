// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// function DashboardLayout() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <div style={{ padding: "20px" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
// export default DashboardLayout;


import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
export default DashboardLayout;