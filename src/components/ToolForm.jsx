
import { Link } from "react-router-dom";

import "./ToolForm.css";

const resetForm = () => {

}


export default function ToolForm({ tool }) {
  return (
    <div className="tool-form">
      <div className="form-header">
        <h2>{tool.name}</h2>
        <Link to="/tools">More AI Tools</Link>
      </div>
      
      <div className="form-body">
        
        {tool.textInputs.map(input => (
          <label key={input.name}>
            <span>{input.name}</span>
            <input type={input.type} placeholder={input.placeholder}/>
          </label>
        ))}
      </div>

      <div className="form-footer">
        <button className="btn clear-btn" onClick={resetForm}>Clear Input</button>
        <button className="btn create-btn">Create</button>
      </div>
    </div>
  );
}
