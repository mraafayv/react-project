import { useState } from "react";
import { Link } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";

import "./ToolForm.css";

export default function ToolForm({ tool, setResult, setPendingResult, setAuthorized }) {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("small");
  const [n, setN] = useState('');
  const [isPending, setIsPending] = useState(false);

  // const {data, isPending, error, postData} = useFetch('https://auth-system-production.up.railway.app/v1/api/user/profile', localStorage.getItem('accessToken'))

  const postData = { prompt, n: parseInt(n), size };

  let token = localStorage.getItem("accessToken");

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();

    if (token) {
      setPendingResult(true)
      setResult(null)

      //check if access token is valid
      fetch(
        "https://auth-system-production.up.railway.app/v1/api/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setAuthorized(true);
            // console.log(postData);
            //image generator tool call
            fetch(
              "https://auth-system-production.up.railway.app/v1/api/openai/image-generator",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + token,
                },
                body: JSON.stringify(postData),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                setResult(data)
                setPendingResult(false);
                setIsPending(false);

              })
              .catch((err) => {
                console.log(err.message)
              });
          }
          else if(!data.success){
            setAuthorized(false);

          }
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
        });

      // console.log("User exists")
    }
  };

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

                    {JSON.parse(input?.options?.replace(/'/g, '"')).map(
                      (opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      )
                    )}
                  </select>
                </label>
              )) ||
              (input.type === "text" && (
                <label key={input.key} htmlFor={input.key}>
                  <span>{input.name}</span>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    onChange={(e) => setN(e.target.value)}
                    value={n}
                    min={input.minLimit}
                    max={input.maxLimit}
                    required
                  />
                </label>
              ))
          )}
        </div>

        <div className="form-footer">
          <input type="reset" className="btn clear-btn" value="Clear Input" />

          {isPending ? (
            <button className="btn create-btn" disabled={isPending}>
              Loading...
            </button>
          ) : (
            <button className="btn create-btn" disabled={isPending}>
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
