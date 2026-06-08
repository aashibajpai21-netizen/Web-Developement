import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Cravings</h1>
        <p>Welcome Back!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="links">
          <a href="#">Forgot Password?</a>
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;