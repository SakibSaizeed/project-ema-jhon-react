import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import ShoppingCart from "../Shopping-Cart/ShoppingCart";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products); //custom hooks with parameter
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h1>{products.length}</h1> */}
        {/* <h5>cart: {cart.length}</h5> */}
        {cart.map((product) => (
          <ReviewProduct
            product={product}
            key={product.id}
            handleRemove={handleRemove}
          ></ReviewProduct>
        ))}
      </div>
      <div className="cart-container">
        <ShoppingCart cart={cart}></ShoppingCart>
      </div>
    </div>
  );
};

export default OrderReview;
