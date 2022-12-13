import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./PageNav.css";
import Searchbar from "./Searchbar";

export default function PageNav() {

    // const url = useParams()
    const url = useLocation()

  return (
    <div className="header">
      <img src={Logo} alt="open AI logo" id="logo" />
      
      {url.pathname === '/tools' && <Searchbar />}
      
      <div className="user-avatar">
        <img src="" alt="" />
      </div>
    </div>
  );
}
