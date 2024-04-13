// SkincarePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import "./cartitems.css";
const Skincare = ({ setCartItem }) => {
  const [skincare, setSkincare] = useState([]);

  useEffect(() => {
    const fetchSkincare = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/skincare"
        );
        const { products } = response.data;
        setSkincare(products);
      } catch (error) {
        console.error("Error fetching skincare products:", error);
      }
    };

    fetchSkincare();
  }, []);

  return (
    <div>
      <h1 className="heading">Skincare</h1>
      <div className="container">
        {skincare.map((product, index) => (
          <Card
            key={index}
            profile={product}
            index={index}
            setCartItem={setCartItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Skincare;
