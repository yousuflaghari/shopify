import { React, createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar";
import Laptop from "./pages/laptop";
import Fragrances from "./pages/fragrances";
import Skincare from "./pages/skincare";
import Groceries from "./pages/groceries";
import Smartphones from "./pages/smartphones";
import Signin from "./pages/signin";
import Welcome from "./pages/welcome";
import Cartitems from "./pages/cartitems";

function App() {
  const [cartItem, setCartItem] = useState([]);
  console.log("hello hi ", cartItem.length);

  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route
            path="/cartitems"
            element={<Cartitems cartItem={cartItem} />}
          />
          <Route
            path="/Signin"
            element={<Signin setCartItem={setCartItem} />}
          />
          <Route
            path="/Laptops"
            element={<Laptop setCartItem={setCartItem} />}
          />
          <Route
            path="/Fragrances"
            element={<Fragrances setCartItem={setCartItem} />}
          />
          <Route
            path="/skincare"
            element={<Skincare setCartItem={setCartItem} />}
          />
          <Route
            path="/Groceries"
            element={<Groceries setCartItem={setCartItem} />}
          />
          <Route
            path="/smartphones"
            element={<Smartphones setCartItem={setCartItem} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
