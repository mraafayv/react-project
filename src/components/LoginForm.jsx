import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    email,
    password,
  };

  const { data, isPending, error, postData } = useFetch(
    "https://auth-system-production.up.railway.app/v1/api/auth/signin",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    postData(user);

    if (isPending) {
      console.log("Loading...");
    }

    if (error) {
      console.log(error.message);
    }

    if (data.success) {
      navigate("/tools");
      console.log(data.data.accessToken);
    }
  };
  return (
    <div className="left-container">
      <div className="header">
        <img src={Logo} alt="open AI logo" />
        <h2>Continue to AI</h2>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="email">
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="password">
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button>Log In</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
