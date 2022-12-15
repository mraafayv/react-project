import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="image-container">
        <img src={Logo} alt="open ai logo" />
        <Link to="/tools">TOOLS</Link>
      </div>
      <div className="button-group">
        <Link to="/signup" className="btn signup">SIGN UP</Link>
        <Link to="/login" className="btn login">LOG IN</Link>
      </div>
    </div>
  );
}
