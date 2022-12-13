import { NavLink } from "react-router-dom";
import "./Tool.css";

export default function Tool({ tool }) {
//   let imgSrc = tool.img;
  return (
    
      <div className="tool-card">
        <div className="tool-image">
          <img src={tool.img} alt="image of tool" />
        </div>

        <div className="tool-body">
          <div className="tool-name">
            <NavLink to={`/tools/${tool.route}`}><h2>{tool.name}</h2></NavLink>
            <span className="status">{tool.status}</span>
          </div>
          <div className="tool-description">
            <p>{tool.subtitle}</p>
          </div>
        </div>
      </div>
  );
}
