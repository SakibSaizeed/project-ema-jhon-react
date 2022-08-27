import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa3, faBackspace, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewProduct.css";
const ReviewProduct = (props) => {
  const { product, handleRemove } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-product">
      <h5>{name}</h5>
      <h6>Price:${price}</h6>
      <img src={img} alt="" style={{ height: "300px" }} />
      <div className="del-btn">
        {" "}
        <button onClick={() => handleRemove(product)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewProduct;
