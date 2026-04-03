// import { createContext, useState } from "react";

// export const EmployeeContext = createContext();

// export const EmployeeProvider = ({ children }) => {
//   const [employees, setEmployees] = useState([
//     { id: 1, name: "Sourav", role: "Developer", email: "sourav@mail.com" },
//     { id: 2, name: "Rahul", role: "Tester", email: "rahul@mail.com" }
//   ]);

//   const addEmployee = (emp) => {
//     setEmployees(prev => [...prev, { ...emp, id: Date.now() }]);
//   };

//   const updateEmployee = (updated) => {
//     setEmployees(prev => prev.map(e => e.id === updated.id ? updated : e));
//   };

//   const deleteEmployee = (id) => {
//     setEmployees(prev => prev.filter(e => e.id !== id));
//   };

//   return (
//     <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
//       {children}
//     </EmployeeContext.Provider>
//   );
// };


import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("employees");
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      // default data
      const defaultData = [
        { id: 1, name: "admin", role: "Manager", email: "admin@mail.com" },
        { id: 2, name: "employee", role: "Developer", email: "employee@mail.com" }
      ];
      setEmployees(defaultData);
      localStorage.setItem("employees", JSON.stringify(defaultData));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  const addEmployee = (emp) => {
    const newEmp = { ...emp, id: Date.now() };
    setEmployees(prev => [...prev, newEmp]);
  };

  const updateEmployee = (updated) => {
    setEmployees(prev =>
      prev.map(e => (e.id === updated.id ? updated : e))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(e => e.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};