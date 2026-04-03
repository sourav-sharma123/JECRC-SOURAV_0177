// // import { useContext, useState } from "react";
// // import { AuthContext } from "../context/AuthContext";
// // import Loader from "../components/Loader";

// // export default function Login() {
// //   const { login, loading } = useContext(AuthContext);
// //   const [form, setForm] = useState({ username: "", password: "" });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     login(form.username, form.password);
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100">
// //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
// //         <h2 className="mb-4">Login</h2>
// //         <input placeholder="Username" className="block mb-2 p-2 border"
// //           onChange={(e) => setForm({ ...form, username: e.target.value })} />
// //         <input type="password" placeholder="Password" className="block mb-2 p-2 border"
// //           onChange={(e) => setForm({ ...form, password: e.target.value })} />
// //         <button className="bg-blue-500 text-white px-4 py-2 w-full flex justify-center items-center">
// //         {loading ? (
// //         <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
// //         ) : (
// //         "Login"
// //         )}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }



// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login, loading } = useContext(AuthContext);
//   const [form, setForm] = useState({ username: "", password: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.username || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     login(form.username, form.password);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-80">
//         <h2 className="mb-4 text-xl font-bold text-center">Login</h2>

//         <input
//           value={form.username}
//           placeholder="Username"
//           className="block mb-3 p-2 border w-full"
//           onChange={(e) => setForm({ ...form, username: e.target.value })}
//         />

//         <input
//           value={form.password}
//           type="password"
//           placeholder="Password"
//           className="block mb-3 p-2 border w-full"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />

//         <button className="bg-blue-500 text-white px-4 py-2 w-full flex justify-center items-center rounded">
//           {loading ? (
//             <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
//           ) : (
//             "Login"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }


import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // ✅ Redirect after login
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    login(form.username, form.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="mb-4 text-xl font-bold text-center">Login</h2>

        <input
          placeholder="Username"
          className="block mb-3 p-2 border w-full"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="block mb-3 p-2 border w-full"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full flex justify-center items-center"
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Login"
          )}
        </button>

        {/* ✅ Demo Credentials */}
        <p className="text-xs mt-3 text-gray-500 text-center">
          admin / admin123 <br />
          employee / emp123
        </p>
      </form>
    </div>
  );
}