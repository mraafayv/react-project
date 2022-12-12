import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search-icon.svg";
import "./Tools.css";

export default function Tools() {
  return (
    <div className="tools-page">
      <div className="header">
        <img src={Logo} alt="open AI logo" id="logo" />
        <div className="search-bar">
          <img src={SearchIcon} alt="Search icon" />
          <input
            type="search"
            id="search"
            placeholder="Search AI writing tools"
          />
        </div>
        <div className="user-avatar">
          <img src="" alt="" />
        </div>
      </div>
      <div className="main-body">
        <h2>AI writing tools</h2>
      </div>
    </div>
  );
}
