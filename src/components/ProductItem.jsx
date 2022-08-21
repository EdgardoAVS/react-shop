import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";
import "@styles/ProductItem.scss";
import addToCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  const { price, title, images } = product;

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
