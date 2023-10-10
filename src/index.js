import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes,Route}  from "react-router-dom";
import App from "./App";
import Success from "./Components/Success";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="/Home" element={<App/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
