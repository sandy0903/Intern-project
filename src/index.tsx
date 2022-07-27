import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./page/History";
ReactDOM.render(

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="history" element={<History/>} />
      </Routes>
    </Router>,

  document.getElementById("root")
);
