import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  return (
    <div className="login">
      <h2>Login</h2>
      <input onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <button onClick={() => { login(name); nav("/dashboard"); }}>
        Login
      </button>
    </div>
  );
}