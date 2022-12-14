import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import tools from "../src/routes/routes.json";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Tools from "./pages/Tools/Tools";
import Result from "./pages/Result/Result";
import ToolPage from "./pages/ToolPage/ToolPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/results" element={<Result />} />
            {/* <Route path='/tools/:route' element={<ToolPage />} /> */}
            {tools.map((tool) =>
              tool.status === "NEW!" ? (
                <Route
                  path={`/tools/${tool.route}`}
                  key={tool.id}
                  element={<ToolPage data={tool} />}
                />
              ) : (
                <Route
                  path={`/tools/${tool.route}`}
                  key={tool.id}
                  element={<p>Coming Soon</p>}
                />
              )
            )}
            <Route path="*" element={<p>Resource not found</p>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
