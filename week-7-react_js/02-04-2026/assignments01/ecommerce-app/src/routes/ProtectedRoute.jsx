// // src/routes/ProtectedRoute.jsx
// import { Navigate } from "react-router-dom";

// const isAuthenticated = () => {
//   return localStorage.getItem("user"); // simple check
// };

// function ProtectedRoute({ children }) {
//   return isAuthenticated() ? children : <Navigate to="/login" />;
// }

// export default ProtectedRoute;



import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;