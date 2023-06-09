import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { JobDataProvider } from "./context/JobDataProvider";
import { QueryContextProvider } from "./context/QueryContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QueryContextProvider>
          <JobDataProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </JobDataProvider>
        </QueryContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
