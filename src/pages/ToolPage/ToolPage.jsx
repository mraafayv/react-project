import PageNav from "../../components/PageNav";
import loadingImg from '../../assets/loading-image.svg'

import "./ToolPage.css";
import ToolForm from "../../components/ToolForm";
import { useState } from "react";
// import { useState } from "react";
// import { useState } from "react";
// import { useFetch } from "../../hooks/useFetch";

export default function ToolPage({ data }) {

  const [result, setResult] = useState(null);
  const [pendingResult, setPendingResult] = useState(false);
  
  // const accessToken = localStorage.getItem("accessToken");
  
  // const { data: result, isPending, error } = useFetch("https://auth-system-production.up.railway.app/v1/api/openai/image-generator", "POST", accessToken);
  
  
  return (
    <div className="tools-page">
      <PageNav />

      <div className="main-body">
        <div className="tools-left-container">
          <ToolForm tool={data} setResult={setResult} setPendingResult={setPendingResult}/>
        </div>

        <div className="tools-right-container">
          <div className="header">
            <h2>Image Results</h2>
          </div>
          <div className="right-container-body">
              {pendingResult && <img src={loadingImg}/>}
            {!result ? <p>
              See your INK Images appear here after you answer the questions on
              the left.
            </p> : result.data.map(val => (
              <img className="generated-image" src={val.url} key={val.url.substring(4,10)}/>
              ))} 
            {/* {result && result.data.map(val => (
              <img className="generated-image" src={val.url} key={val.url.substring(4,10)}/>
              ))} */}
            
              {/* {result && console.log(result)} */}
            </div>
        </div>
      </div>
    </div>
  );
}
