// src/components/AddToCartModal.js
import React from "react";

const AddToCartModal = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={closeModal}>Confirm Add to Cart</button>
    </div>
  );
};

export default AddToCartModal;
