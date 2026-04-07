import { createContext, useContext, useReducer } from "react";

const EmployeeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), ...action.payload }];
    case "DELETE":
      return state.filter(emp => emp.id !== action.payload);
    case "UPDATE":
      return state.map(emp =>
        emp.id === action.payload.id ? action.payload : emp
      );
    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(reducer, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        add: (emp) => dispatch({ type: "ADD", payload: emp }),
        remove: (id) => dispatch({ type: "DELETE", payload: id }),
        update: (emp) => dispatch({ type: "UPDATE", payload: emp })
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);