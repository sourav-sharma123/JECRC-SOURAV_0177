import { useState, useEffect } from "react";

export default function EmployeeForm({ onSubmit, editData }) {
  const [form, setForm] = useState({ name: "", role: "", email: "" });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleSubmit = () => {
    if (!form.name || !form.role || !form.email) {
      alert("All fields required");
      return;
    }
    onSubmit(form);
    setForm({ name: "", role: "", email: "" });
  };

  return (
    <div className="bg-gray-100 p-4 rounded mb-4">
      <input placeholder="Name" className="p-2 mr-2" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Role" className="p-2 mr-2" value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })} />
      <input placeholder="Email" className="p-2 mr-2" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-3">
        {editData ? "Update" : "Add"}
      </button>
    </div>
  );
}
