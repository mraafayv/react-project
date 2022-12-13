import PageNav from "../../components/PageNav";

import tools from '../../routes/routes.json'
import ToolsList from "../../components/ToolsList";

import "./Tools.css";

export default function Tools() {
  return (
    <div className="tools-page">
      <PageNav />

      <div className="tools-main-body">
        <h2>AI writing tools</h2>
        
        <ToolsList tools={tools} />
      </div>
    </div>
  );
}
