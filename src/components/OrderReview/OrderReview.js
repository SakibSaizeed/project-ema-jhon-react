import React from "react";
import useProducts from "../../hooks/useProducts";

const OrderReview = () => {
  const [products, setProducts] = useProducts(); //custom hooks
  return (
    <div>
      This is order review comp
      <h1>{products.length}</h1>
    </div>
  );
};

export default OrderReview;
