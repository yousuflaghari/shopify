// GroceriesPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/groceries"
        );
        const { products } = response.data;
        console.log(response.data);
        setGroceries(products);
      } catch (error) {
        console.error("Error fetching groceries:", error);
      }
    };

    fetchGroceries();
  }, []);

  return (
    <div>
      <h1 className="heading">Groceries</h1>
      <div className="container">
        {groceries.map((item, index) => (
          <Card key={index} profile={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Groceries;
