// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const login = (username, password) => {
//     setLoading(true);
//     setTimeout(() => {
//       if (username === "admin") setUser({ username, role: "admin" });
//       else setUser({ username, role: "employee" });
//       setLoading(false);
//     }, 1000);
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (username, password) => {
    setLoading(true);

    setTimeout(() => {
      // ✅ Proper validation
      if (username === "admin" && password === "admin123") {
        const userData = { username, role: "admin" };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else if (username === "employee" && password === "emp123") {
        const userData = { username, role: "employee" };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        alert("Invalid credentials ❌");
      }

      setLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};