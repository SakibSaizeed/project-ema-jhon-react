import React from "react";
import "./ReviewProduct.css";
const ReviewProduct = (props) => {
  const { product, handleRemove } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-product">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <img src={img} alt="" style={{ height: "300px" }} />
      <div>
        {" "}
        <button onClick={() => handleRemove(product)}>Delete</button>
      </div>
    </div>
  );
};

export default ReviewProduct;
