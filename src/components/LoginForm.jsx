import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthCotext";
import { useFetch } from "../hooks/useFetch";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useAuthContext();

  const { data, isPending, error, postData } = useFetch(
    "https://auth-system-production.up.railway.app/v1/api/auth/signin",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      email,
      password,
    });

    if (data && data.success) {
      console.log(data);
      navigate("/tools");
      localStorage.setItem("accessToken", data.data.accessToken);
      dispatch({ type: "LOGIN", payload: data.data.user });
      // setUser(data.data.user);
      // console.log(data.data.accessToken);
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

        <button disabled={isPending}>{isPending ? <p>Loading...</p> : <p>Log In</p> }</button>
      </form>

      {error && <div className="error">{error}</div>}

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
