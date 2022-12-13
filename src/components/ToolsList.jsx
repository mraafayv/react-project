import Tool from "./Tool";

import "./ToolsList.css";

export default function ToolsList({ tools }) {
  return (
    <div className="tools-list">
      {tools.map((tool) => (
        <Tool tool={tool} key={tool.id} />
      ))}
    </div>
  );
}
