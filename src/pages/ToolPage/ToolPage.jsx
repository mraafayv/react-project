import PageNav from "../../components/PageNav";

import "./ToolPage.css";
import ToolForm from "../../components/ToolForm";
// import { useState } from "react";
// import { useState } from "react";
// import { useFetch } from "../../hooks/useFetch";

export default function ToolPage({ data }) {

  // const [result, setResult] = useState(null)
  
  // const accessToken = localStorage.getItem("accessToken");
  
  // const { data: result, isPending, error } = useFetch("https://auth-system-production.up.railway.app/v1/api/openai/image-generator", "POST", accessToken);
  
  
  return (
    <div className="tools-page">
      <PageNav />

      <div className="main-body">
        <div className="tools-left-container">
          <ToolForm tool={data} />
        </div>

        <div className="tools-right-container">
          <div className="header">
            <h2>Image Results</h2>
          </div>
          <div className="right-container-body">
            <p>
              See your INK Images appear here after you answer the questions on
              the left.
            </p>
            
            </div>
        </div>
      </div>
    </div>
  );
}
