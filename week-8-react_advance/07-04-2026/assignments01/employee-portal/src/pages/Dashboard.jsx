// import Navbar from "../components/Navbar";
// import { useEmployees } from "../context/EmployeeContext";

// export default function Dashboard() {
//   const { employees } = useEmployees();

//   return (
//     <>
//       <Navbar />
//       <div className="card">
//         <h2>Dashboard</h2>
//         <p>Total Employees: {employees.length}</p>
//       </div>
//     </>
//   );
// }



import Navbar from "../components/Navbar";
import { useEmployees } from "../context/EmployeeContext";

export default function Dashboard() {
  const { employees } = useEmployees();

  return (
    <>
      <Navbar />

      <div className="card">
        <h2>📊 Dashboard</h2>

        <div className="row">
          <h3>Total Employees</h3>
          <h1>{employees.length}</h1>
        </div>

        <div className="row">
          <h3>System Status</h3>
          <h3 style={{ color: "green" }}>Active</h3>
        </div>
      </div>
    </>
  );
}