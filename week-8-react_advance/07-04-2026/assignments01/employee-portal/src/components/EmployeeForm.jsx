// import { useState } from "react";
// import { useEmployees } from "../context/EmployeeContext";

// export default function EmployeeForm() {
//   const { add, update } = useEmployees();
//   const [emp, setEmp] = useState({ id: null, name: "", role: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (emp.id) update(emp);
//     else add(emp);

//     setEmp({ id: null, name: "", role: "" });
//   };

//   return (
//     <form className="card" onSubmit={handleSubmit}>
//       <input
//         value={emp.name}
//         onChange={(e) => setEmp({ ...emp, name: e.target.value })}
//         placeholder="Name"
//       />
//       <input
//         value={emp.role}
//         onChange={(e) => setEmp({ ...emp, role: e.target.value })}
//         placeholder="Role"
//       />
//       <button>{emp.id ? "Update" : "Add"}</button>
//     </form>
//   );
// }


import { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";
import Toast from "./Toast";

export default function EmployeeForm() {
  const { add } = useEmployees();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      add({ name, role });
      setLoading(false);
      setToast("Employee Added ✅");
      setName("");
      setRole("");
    }, 800);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
        <button>Add Employee</button>
      </form>

      {loading && <div className="loader"></div>}
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}