export default function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table className="w-full border">
      <thead className="bg-gray-200">
        <tr>
          <th>Name</th><th>Role</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id} className="text-center border">
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>{emp.email}</td>
            <td>
              <button onClick={() => onEdit(emp)} className="bg-yellow-400 px-2 mr-2">Edit</button>
              <button onClick={() => onDelete(emp.id)} className="bg-red-400 px-2">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}