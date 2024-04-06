import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Topbar from "./components/topbar";
import Laptop from "./pages/laptop";
import Fragrances from "./pages/fragrances";
import Skincare from "./pages/skincare";
import Groceries from "./pages/groceries";
import Smartphones from "./pages/smartphones";
import Signin from "./pages/signin";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Link to="/signin">
          <button className="btn-app">Sign In</button>
        </Link>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/Laptops" element={<Laptop />} />
          <Route path="/Fragrances" element={<Fragrances />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/Groceries" element={<Groceries />} />
          <Route path="/smartphones" element={<Smartphones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
