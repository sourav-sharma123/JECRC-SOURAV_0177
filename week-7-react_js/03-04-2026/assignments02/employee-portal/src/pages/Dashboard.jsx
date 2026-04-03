import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { EmployeeContext } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);

  const [editData, setEditData] = useState(null);

  const handleSubmit = (data) => {
    if (editData) {
      updateEmployee({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addEmployee(data);
    }
  };

  const myData = employees.filter(e => e.name === user.username);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {user.role === "admin" ? (
          <>
            <EmployeeForm onSubmit={handleSubmit} editData={editData} />
            <EmployeeTable employees={employees} onEdit={setEditData} onDelete={deleteEmployee} />
          </>
        ) : (
          <div className="bg-gray-100 p-4">
            <h2>My Profile</h2>
            {myData.map(emp => (
              <div key={emp.id}>
                <p>{emp.name}</p>
                <p>{emp.role}</p>
                <p>{emp.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}