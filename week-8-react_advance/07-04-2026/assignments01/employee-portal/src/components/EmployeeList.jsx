// import { useEmployees } from "../context/EmployeeContext";
// import { useState } from "react";

// export default function EmployeeList() {
//   const { employees, remove, update } = useEmployees();
//   const [editId, setEditId] = useState(null);
//   const [editData, setEditData] = useState({ name: "", role: "" });

//   return (
//     <div className="card">
//       <h3>Employees</h3>

//       {employees.map(emp => (
//         <div key={emp.id} className="row">
//           {editId === emp.id ? (
//             <>
//               <input
//                 value={editData.name}
//                 onChange={(e) => setEditData({ ...editData, name: e.target.value })}
//               />
//               <input
//                 value={editData.role}
//                 onChange={(e) => setEditData({ ...editData, role: e.target.value })}
//               />
//               <button onClick={() => {
//                 update({ id: emp.id, ...editData });
//                 setEditId(null);
//               }}>Save</button>
//             </>
//           ) : (
//             <>
//               <span>{emp.name} - {emp.role}</span>
//               <button onClick={() => {
//                 setEditId(emp.id);
//                 setEditData(emp);
//               }}>Edit</button>
//               <button onClick={() => remove(emp.id)}>Delete</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



// import { useEmployees } from "../context/EmployeeContext";
// import { useState } from "react";

// export default function EmployeeList() {
//   const { employees, remove, update } = useEmployees();
//   const [editId, setEditId] = useState(null);
//   const [editData, setEditData] = useState({ name: "", role: "" });

//   if (employees.length === 0) {
//     return <div className="card">No Employees Found</div>;
//   }

//   return (
//     <div className="card">
//       <h3>Employees</h3>

//       {employees.map(emp => (
//         <div key={emp.id} className="row">
//           {editId === emp.id ? (
//             <>
//               <input
//                 value={editData.name}
//                 onChange={(e) =>
//                   setEditData({ ...editData, name: e.target.value })
//                 }
//               />
//               <input
//                 value={editData.role}
//                 onChange={(e) =>
//                   setEditData({ ...editData, role: e.target.value })
//                 }
//               />
//               <button
//                 onClick={() => {
//                   update({ id: emp.id, ...editData });
//                   setEditId(null);
//                 }}
//               >
//                 Save
//               </button>
//             </>
//           ) : (
//             <>
//               <span><b>{emp.name}</b> - {emp.role}</span>

//               <div>
//                 <button
//                   onClick={() => {
//                     setEditId(emp.id);
//                     setEditData(emp);
//                   }}
//                 >
//                   Edit
//                 </button>

//                 <button onClick={() => remove(emp.id)}>Delete</button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import { useEmployees } from "../context/EmployeeContext";
import { useState, useMemo } from "react";

export default function EmployeeList() {
  const { employees, remove, update } = useEmployees();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", role: "" });

  // 🔥 NEW STATES
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // 🔥 OPTIMIZED FILTER + SORT (useMemo for performance)
  const filteredEmployees = useMemo(() => {
    let data = [...employees];

    // SEARCH
    if (search) {
      data = data.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // FILTER
    if (filterRole !== "All") {
      data = data.filter(emp => emp.role === filterRole);
    }

    // SORT
    data.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return data;
  }, [employees, search, filterRole, sortOrder]);

  // UNIQUE ROLES (for filter dropdown)
  const roles = ["All", ...new Set(employees.map(emp => emp.role))];

  return (
    <div className="card">
      <h3>Employees</h3>

      {/* 🔥 SEARCH + FILTER + SORT */}
      <div className="controls">
        <input
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          {roles.map(role => (
            <option key={role}>{role}</option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {/* LIST */}
      {filteredEmployees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (
        filteredEmployees.map(emp => (
          <div key={emp.id} className="row">
            {editId === emp.id ? (
              <>
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
                <input
                  value={editData.role}
                  onChange={(e) =>
                    setEditData({ ...editData, role: e.target.value })
                  }
                />
                <button
                  onClick={() => {
                    update({ id: emp.id, ...editData });
                    setEditId(null);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>
                  <b>{emp.name}</b> - {emp.role}
                </span>

                <div>
                  <button
                    onClick={() => {
                      setEditId(emp.id);
                      setEditData(emp);
                    }}
                  >
                    Edit
                  </button>

                  <button onClick={() => remove(emp.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}