import { useState } from "react";
import { Link } from "react-router-dom";

import "./ToolForm.css";




export default function ToolForm({ tool }) {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("");
  const [number, setNumber] = useState(0);



  
const handleSubmit = (e) => {
  e.preventDefault();

  if(number > 3){
   throw Error("Number Can't be greater than 3")
  }

  if(localStorage.getItem('accessToken')){
    console.log("User exists")
  }
  
}



  return (
    <div className="tool-form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>{tool.name}</h2>
          <Link to="/tools">More AI Tools</Link>
        </div>

        <div className="form-body">
          {tool.textInputs.map(
            (input) =>
              (input.type === "textarea" && (
                <label htmlFor={input.key} key={input.key}>
                  <span>{input.name}</span>
                  <textarea
                    maxLength={input.maxLimit}
                    minLength={input.minLimit}
                    name={input.name}
                    placeholder={input.placeholder}
                    onChange={(e) => setPrompt(e.target.value)}
                    value={prompt}
                    required
                  />
                </label>
              )) ||
              (input.type === "option" && (
                <label key={input.key} htmlFor={input.key}>
                  <span>{input.name}</span>
                  <select
                    name={input.name}
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                    placeholder={input.placeholder}
                    required
                  >
                    {/* {console.log(typeof input.options)} */}
                    {/* {Array.from(input.options).map((opt) => 
                      // <option key={opt} value={opt}>
                      //   {opt}
                      // </option>
                      console.log(opt)
                    )} */}

                   {JSON.parse(input?.options?.replace(/'/g, '"')).map((opt) => 
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    )}

                  </select>
                </label>
              )) ||
              (input.type === "number" && (
                <label key={input.key} htmlFor={input.key}>
                  <span>{input.name}</span>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    required
                  />
                </label>
              ))
          )}
        </div>

        <div className="form-footer">
          <input type="reset" className="btn clear-btn" value="Clear Input" />

          <button className="btn create-btn">Create</button>
        </div>
      </form>
    </div>
  );
}
