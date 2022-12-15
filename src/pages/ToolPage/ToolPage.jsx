import PageNav from "../../components/PageNav";
import loadingImg from '../../assets/loading-image.svg'

import "./ToolPage.css";
import ToolForm from "../../components/ToolForm";
import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm";
import Progressbar from "../../components/Progressbar";
// import { useState } from "react";
// import { useState } from "react";
// import { useFetch } from "../../hooks/useFetch";

export default function ToolPage({ data }) {

  const [result, setResult] = useState(null);
  const [pendingResult, setPendingResult] = useState(false);

  const [authorized, setAuthorized] = useState(true);

  const [display, setDisplay] = useState('unset')
  
  // const accessToken = localStorage.getItem("accessToken");
  
  // const { data: result, isPending, error } = useFetch("https://auth-system-production.up.railway.app/v1/api/openai/image-generator", "POST", accessToken);
  useEffect(()=> {
    if(pendingResult){

      setDisplay('none')
    }
  }, [pendingResult])
  
  return (
    <div className="tools-page">
      <PageNav />

      <div className="main-body">
        <div className="tools-left-container">
          <ToolForm tool={data} setResult={setResult} setPendingResult={setPendingResult} setAuthorized={setAuthorized}/>
        </div>

        <div className="tools-right-container">
          <div className="header">
            <h2>Image Results</h2>
          </div>
          <div className="right-container-body">

            
            {authorized ? 
            (<p style={{display: `${display}`}}>
              See your INK Images appear here after you answer the questions on
              the left.
            </p>) : <LoginForm />}

            {authorized && pendingResult && (
              <div className="loading-state">
                <img src={loadingImg} className="loading-image"/>
                <Progressbar />
            </div>
            ) }
            {authorized && !pendingResult && result &&  result.data.map(val => (
              <img className="generated-image" src={val.url} key={val.url.substring(4,10)}/>
              ))}
            
            {/* {authorized ? } */}
            {/* {pendingResult && <img src={loadingImg}/>}
            {!result ? <p>
              See your INK Images appear here after you answer the questions on
              the left.
            </p> : result.data.map(val => (
              <img className="generated-image" src={val.url} key={val.url.substring(4,10)}/>
              ))}  */}
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
