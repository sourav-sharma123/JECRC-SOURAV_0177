import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { logout } = useAuth();
  const { toggleTheme } = useTheme();
  const nav = useNavigate();

  return (
    <nav className="navbar">
      <h2>Employee Portal</h2>

      <div>
        <button onClick={() => nav("/dashboard")}>Dashboard</button>
        <button onClick={() => nav("/employees")}>Employees</button>
        <button onClick={toggleTheme}>Theme</button>
        <button onClick={() => { logout(); nav("/"); }}>Logout</button>
      </div>
    </nav>
  );
}