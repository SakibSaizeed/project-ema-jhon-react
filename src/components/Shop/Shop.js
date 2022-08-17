import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  function addToCart(product){
    console.log(product);
    //cart.push(product);
    const newCart=[...cart,product];
    setCart(newCart);
    console.log(newCart[0].name);

  }

  
  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h1>Products Container</h1>{" "} */}
        {products.map((product) => (
          <Product 
          product={product}
          key={product.id}
          addToCart={addToCart}></Product>
        ))}
      </div>

      <div className="order-container">
        <h2>Order Summury</h2>
        <h4>Selected Items:{cart.length}</h4>
        <h5>
          
        </h5>
      </div>
    </div>
  );
};

export default Shop;
