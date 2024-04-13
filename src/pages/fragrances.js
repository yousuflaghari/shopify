// FragrancesPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

const Fragrances = ({ setCartItem }) => {
  const [fragrances, setFragrances] = useState([]);

  useEffect(() => {
    const fetchFragrances = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/fragrances"
        );
        const { products } = response.data;

        setFragrances(products);
      } catch (error) {
        console.error("Error fetching fragrances:", error);
      }
    };

    fetchFragrances();
  }, []);

  return (
    <div>
      <h1 className="heading">Fragrances</h1>
      <div className="container">
        {fragrances.map((fragrance, index) => (
          <Card
            key={index}
            profile={fragrance}
            index={index}
            setCartItem={setCartItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Fragrances;
