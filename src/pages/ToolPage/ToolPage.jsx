import PageNav from "../../components/PageNav";

import "./ToolPage.css";
import ToolForm from "../../components/ToolForm";

export default function ToolPage({data}) {
  //   const validTools = [
  //     "/tools/hey-ink",
  //     "/tools/image-generator",
  //     "/tools/facebook-primary-text-generator",
  //     "/tools/bullet-text",
  //     "/tools/call-to-action",
  //   ];

  return (
    <div className="tools-page">
      <PageNav />

      <div className="main-body">
        <div className="tools-left-container">
          <ToolForm tool={data}/>
        </div>

        <div className="tools-right-container">
          <div className="header">
            <h2>Image Results</h2>
          </div>
          <div className="right-container-body">
            <p>See your INK Images appear here after you answer the questions on the left.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
