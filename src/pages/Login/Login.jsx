import "./Login.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-page">
      <div className="left-container">
        <div className="header">
          <img src={Logo} alt="open AI logo" />
          <h2>Continue to AI</h2>
        </div>
        <form className="login-form">
          <label className="email">
            <span>Email</span>
            <input type="text" required />
          </label>

          <label className="password">
            <span>Password</span>
            <input type="text" required />
          </label>

          <button>Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <div className="right-container"></div>
    </div>
  );
}
