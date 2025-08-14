import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Layout>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
