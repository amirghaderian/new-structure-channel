// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (!username || !password) {
//       setError("Both fields are required.");
//       return;
//     }

//     if (username === "user" && password === "password") {
//       sessionStorage.setItem("user", username); // Store the session
//       navigate("/overview"); // Redirect to overview page
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
