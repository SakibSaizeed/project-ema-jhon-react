import React, { useEffect, useState } from "react";
import "./Product.css"
const Product = (props) => {
  const { name,price, img,ratings,seller } = props.product;
  return (
    <div className="single-product">
      <img src={img} alt="product-img"/>
   
      <div className="product-info">
      <h4>{name}</h4>
      <h5>Price: {price}$</h5>
      <p>Seller: {seller}</p>
      <p>Rating: {ratings}</p>
</div>
<button className="add-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
