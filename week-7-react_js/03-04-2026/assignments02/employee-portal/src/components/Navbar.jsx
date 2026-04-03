import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="font-bold">Employee Portal</h1>
      <div>
        <span className="mr-4">{user?.username}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}