import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Dashboard from "./dashboard";
// import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        {/* <LoginPage /> */}
        {/* <LandingPage /> */}
        <Route path="" element={<Dashboard />} />
        <Route path="/about" element={<Dashboard />} />
        <Route path="/blog" element={<Dashboard />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
