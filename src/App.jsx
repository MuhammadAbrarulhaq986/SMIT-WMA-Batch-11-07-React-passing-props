import React, { useState, useEffect } from "react";

import "./components/CardList.css";
const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products.slice(0, 10)); // Fetching the first 10 products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>OLX Card Task</h1>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-image"
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>

          <button className="btn">Buy</button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
