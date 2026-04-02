// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () =>{
//     setCount(prev => prev +1);
//   }

//   const incrementByTwo = () => {
//     setCount(prev => prev + 2);
//   }

//   const reactCount = () => {
//     setCount(0);
//   }

//   const styles = {
//     container: {
//       textAlign: "center",
//       marginTop: "50px"
//     },
//     btn: {
//       margin: "10px",
//       padding: "10px 20px",
//       fontSize: "10px"
//     }
//   };

//   return(
//     <div>
//       <h2>Count: {count}</h2>
//       <button style={styles.btn} onClick={() => setCount(count +1)}>Increment</button>

//       <button style={styles.btn} onClick={() => setCount(count -1)}>Decrement</button>
//     </div>
//   );
  
// }
// export default App;





// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   };
  
//   return (
//     <div style={styles.container}>
//       <h1>Functional Update Demo </h1>
//       <h2>Count: {count}</h2>
//       <button style={styles.btn} onClick={increment}>
//         Increment
//       </button>
//       <button style={styles.btn} onClick={decrement}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//   },
//   btn: {
//     margin: '10px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
// };
// export default App;


// import React, { useState } from 'react';

// function App() {

//   const [data, setData] = useState(() => {
//     console.log("Expensive computation running ");

//     let result = 0;
//     for (let i=0; i < 1000000; i++)
//     {
//       result +=i;
//     }
//     return result;
//   });

//   const recalculateData = () => {
//     setData( prev => {
//       console.log("Recalculating the data");
//       return prev + 100;
//     })
//   }
  
//   return (
//     <div style={styles.container}>
//       <h1>Lazy Initialization Demo</h1>
//       <h2>Computed Value: {data}</h2>
//       <button style={styles.btn} onClick={recalculateData}>
//         Recalculate (+100)
//       </button>
//       <p style={styles.info}>
//         Expensive calculation runs only once during the initial render.
//       </p>
      
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//   },
//   btn: {
//     margin: '10px',
//     padding: '10px 20px',
//     fontSize: '16px',
//   },
// };
// export default App;





// import React, { useState } from 'react';

// function App() {

//   const [user, setUser] = useState({
//     name: "",
//     age: "",
//     email: ""
//   });

//   const [submittedUser, setSubmittedUser] = useState(null);

//   // Update Name
//   const updateUserName = (name) => {
//     setUser(prev => ({
//       ...prev,
//       name: name
//     }));
//   };

//   // Update Age
//   const updateUserAge = (age) => {
//     setUser(prev => ({
//       ...prev,
//       age: age
//     }));
//   };

//   // Update Email
//   const updateEmail = (email) => {
//     setUser(prev => ({
//       ...prev,
//       email: email
//     }));
//   };

//   // Add Button (Submit Data)
//   const addUser = () => {
//     setSubmittedUser(user);
//   };

//   // Reset
//   const resetUser = () => {
//     setUser({
//       name: "",
//       age: "",
//       email: ""
//     });
//     setSubmittedUser(null);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Object State Demo</h1>

//       {/* Inputs */}
//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={user.name}
//         onChange={(e) => updateUserName(e.target.value)}
//         style={styles.input}
//       />

//       <input
//         type="text"
//         placeholder="Enter Age"
//         value={user.age}
//         onChange={(e) => updateUserAge(e.target.value)}
//         style={styles.input}
//       />

//       <input
//         type="text"
//         placeholder="Enter Email"
//         value={user.email}
//         onChange={(e) => updateEmail(e.target.value)}
//         style={styles.input}
//       />

//       {/* Buttons */}
//       <div>
//         <button onClick={addUser} style={styles.btn}>Add</button>
//         <button onClick={resetUser} style={styles.btn}>Reset</button>
//       </div>

//       {/* Display Data */}
//       {submittedUser && (
//         <div style={styles.card}>
//           <h2>User Details</h2>
//           <p><strong>Name:</strong> {submittedUser.name}</p>
//           <p><strong>Age:</strong> {submittedUser.age}</p>
//           <p><strong>Email:</strong> {submittedUser.email}</p>
//         </div>
//       )}

//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//   },
//   input: {
//     display: "block",
//     margin: "10px auto",
//     padding: "10px",
//     width: "250px"
//   },
//   btn: {
//     margin: '10px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer'
//   },
//   card: {
//     marginTop: "20px",
//     padding: "15px",
//     border: "1px solid #ccc",
//     display: "inline-block"
//   }
// };

// export default App;



// import React, { useState } from "react";

// function App() {

//   const [items, setItems] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   // 🔹 Add Single Item
//   const addItem = () => {
//     const newItem = {
//       id: Date.now(),
//       name: "Item " + (items.length + 1),
//       created: new Date().toLocaleTimeString()
//     };

//     setItems(prev => [...prev, newItem]);
//   };

//   // 🔹 Add Multiple Items
//   const addMultipleItems = () => {
//     const newItems = [
//       { id: Date.now(), name: "Batch Item 1", created: new Date().toLocaleTimeString() },
//       { id: Date.now() + 1, name: "Batch Item 2", created: new Date().toLocaleTimeString() },
//       { id: Date.now() + 2, name: "Batch Item 3", created: new Date().toLocaleTimeString() }
//     ];

//     setItems(prev => [...prev, ...newItems]);
//   };

//   // 🔴 Delete One
//   const deleteItem = (id) => {
//     setItems(items.filter(item => item.id !== id));
//   };

//   // 🔴 Delete All
//   const deleteAll = () => {
//     setItems([]);
//   };

//   // 🟡 Start Editing
//   const startEdit = (item) => {
//     setEditId(item.id);
//     setEditText(item.name);
//   };

//   // 🟢 Save Update
//   const saveEdit = () => {
//     const updatedItems = items.map(item =>
//       item.id === editId ? { ...item, name: editText } : item
//     );

//     setItems(updatedItems);
//     setEditId(null);
//     setEditText("");
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Items List (CRUD)</h2>

//       <button onClick={addItem} style={styles.btn}>Add Item</button>
//       <button onClick={addMultipleItems} style={styles.btn}>Add Multiple</button>
//       <button onClick={deleteAll} style={{ ...styles.btn, background: "red", color: "white" }}>
//         Delete All
//       </button>

//       <ul style={styles.list}>
//         {items.map(item => (
//           <li key={item.id} style={styles.item}>

//             {/* 🟡 If Editing */}
//             {editId === item.id ? (
//               <>
//                 <input
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={saveEdit} style={styles.saveBtn}>Save</button>
//               </>
//             ) : (
//               <>
//                 <span>
//                   {item.name} - {item.created}
//                 </span>

//                 <div>
//                   <button
//                     onClick={() => startEdit(item)}
//                     style={styles.editBtn}
//                   >
//                     ✏️
//                   </button>

//                   <button
//                     onClick={() => deleteItem(item.id)}
//                     style={styles.deleteBtn}
//                   >
//                     ❌
//                   </button>
//                 </div>
//               </>
//             )}

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "20px",
//     textAlign: "center"
//   },
//   btn: {
//     margin: "10px",
//     padding: "8px 15px",
//     cursor: "pointer"
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//     marginTop: "20px"
//   },
//   item: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: "10px auto",
//     width: "350px",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px"
//   },
//   deleteBtn: {
//     background: "red",
//     color: "white",
//     border: "none",
//     padding: "5px 10px",
//     marginLeft: "5px",
//     cursor: "pointer"
//   },
//   editBtn: {
//     background: "orange",
//     color: "white",
//     border: "none",
//     padding: "5px 10px",
//     marginRight: "5px",
//     cursor: "pointer"
//   },
//   saveBtn: {
//     background: "green",
//     color: "white",
//     border: "none",
//     padding: "5px 10px",
//     marginLeft: "5px",
//     cursor: "pointer"
//   }
// };

// export default App;



// import React, { useReducer, useState } from "react";

// function App() {

//   // 🔹 Initial State
//   const initialCounterState = {
//     count: 0,
//     history: []
//   };

//   // 🔹 Reducer Function
//   function counterReducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return {
//           count: state.count + 1,
//           history: [
//             ...state.history,
//             { type: "increment", value: state.count + 1, time: new Date().toLocaleTimeString() }
//           ]
//         };

//       case "decrement":
//         return {
//           count: state.count - 1,
//           history: [
//             ...state.history,
//             { type: "decrement", value: state.count - 1, time: new Date().toLocaleTimeString() }
//           ]
//         };

//       case "reset":
//         return {
//           count: 0,
//           history: [
//             ...state.history,
//             { type: "reset", value: 0, time: new Date().toLocaleTimeString() }
//           ]
//         };

//       case "set":
//         return {
//           count: action.payload,
//           history: [
//             ...state.history,
//             { type: "set", value: action.payload, time: new Date().toLocaleTimeString() }
//           ]
//         };

//       default:
//         return state;
//     }
//   }

//   // 🔹 useReducer Hook
//   const [counterState, dispatch] = useReducer(counterReducer, initialCounterState);

//   // 🔹 Input State for SET
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div style={styles.container}>
//       <h1>useReducer Counter (Advanced)</h1>

//       <h2>Count: {counterState.count}</h2>

//       {/* 🔹 Actions */}
//       <div>
//         <button style={styles.btn} onClick={() => dispatch({ type: "increment" })}>
//           +1
//         </button>

//         <button style={styles.btn} onClick={() => dispatch({ type: "decrement" })}>
//           -1
//         </button>

//         <button style={styles.resetBtn} onClick={() => dispatch({ type: "reset" })}>
//           Reset
//         </button>
//       </div>

//       {/* 🔹 Set Value */}
//       <div style={{ marginTop: "20px" }}>
//         <input
//           type="number"
//           placeholder="Enter value"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           style={styles.input}
//         />

//         <button
//           style={styles.btn}
//           onClick={() =>
//             dispatch({ type: "set", payload: Number(inputValue) })
//           }
//         >
//           Set Value
//         </button>
//       </div>

//       {/* 🔹 History */}
//       <h3 style={{ marginTop: "30px" }}>History</h3>

//       <ul style={styles.list}>
//         {counterState.history.map((item, index) => (
//           <li key={index} style={styles.card}>
//             <b>{item.type.toUpperCase()}</b> → {item.value}
//             <br />
//             <small>{item.time}</small>
//           </li>
//         ))}
//       </ul>

//       <p style={styles.info}>
//         👉 useReducer is best for <b>complex state logic & history tracking</b>
//       </p>
//     </div>
//   );
// }

// // 🎨 Styling
// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "40px",
//     fontFamily: "Arial"
//   },
//   btn: {
//     margin: "10px",
//     padding: "10px 15px",
//     cursor: "pointer"
//   },
//   resetBtn: {
//     margin: "10px",
//     padding: "10px 15px",
//     backgroundColor: "red",
//     color: "white",
//     border: "none",
//     cursor: "pointer"
//   },
//   input: {
//     padding: "10px",
//     marginRight: "10px"
//   },
//   list: {
//     listStyle: "none",
//     padding: 0
//   },
//   card: {
//     border: "1px solid #ccc",
//     margin: "10px auto",
//     padding: "10px",
//     width: "250px"
//   },
//   info: {
//     marginTop: "20px",
//     color: "green"
//   }
// };

// export default App;


