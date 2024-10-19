// src/components/ProductCard.js
import React from "react";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product, openModal }) => {
  const history = useHistory();

  const handleViewProduct = () => {
    history.push(`/thankyou/${product.name}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleViewProduct}>View Product</button>
      <button onClick={() => openModal(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
