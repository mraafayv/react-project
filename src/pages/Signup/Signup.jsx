import "./Signup.css";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    name,
    email,
    password,
  };

  const { data, isPending, error, postData } = useFetch(
    "https://auth-system-production.up.railway.app/v1/api/auth/signup",
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
    <div className="signup-page">
      <div className="left-container">
        <div className="header">
          <img src={Logo} alt="open AI logo" />
          <h2>Continue to AI</h2>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="name">
            <span>Name</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>

          <label className="email">
            <span>Email</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>

          <label className="password">
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </label>

          <button>Sign Up</button>
        </form>

        <label className="option">
          <input type="checkbox" />
          <span>Accept T&C and privacy Policy</span>
        </label>

        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <div className="right-container"></div>
    </div>
  );
}
