import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h1>Products Container</h1>{" "} */}
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>

      <div className="order-container">
        <h2>Order Summury</h2>
      </div>
    </div>
  );
};

export default Shop;
