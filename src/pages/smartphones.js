// SmartphonesPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

const Smartphones = ({ setCartItem }) => {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    const fetchSmartphones = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/smartphones"
        );
        const { products } = response.data;
        setSmartphones(products);
      } catch (error) {
        console.error("Error fetching smartphones:", error);
      }
    };

    fetchSmartphones();
  }, []);

  return (
    <div>
      <h1 className="heading">Smartphones</h1>
      <div className="container">
        {smartphones.map((phone, index) => (
          <Card
            key={index}
            index={index}
            profile={phone}
            setCartItem={setCartItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Smartphones;
