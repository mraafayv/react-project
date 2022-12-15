import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthCotext";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import "./PageNav.css";
import Searchbar from "./Searchbar";

export default function PageNav({tools}) {

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();


  if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user'))
    var initials = user.name.split(" ").map((n)=>n[0]).join("");
  }

  const user = localStorage.getItem('user');

  const url = useLocation()

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')

    navigate('/')
  }

  return (
    <div className="header">
      <Link to="/tools">
      <img src={Logo} alt="open AI logo" id="logo" />
      </Link>
      
      {url.pathname === '/tools' && <Searchbar tools={tools}/>}
      
      {user && <div className="user-avatar">
        {/* <img src="" alt="" /> */}
        <p className="initials">{initials.toUpperCase()}</p>
      </div>}

      {user && <button onClick={logout}>Log Out</button>}
      {!user && <button onClick={() => navigate('/login')}>Log In</button>}
    </div>
  );
}
