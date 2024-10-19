// src/pages/ProductList.js
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import AddToCartModal from "../components/AddToCartModal";
import Pagination from "../components/Pagination";

const productsData = [
  { id: 1, name: "Product 1", price: 50, image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: 60, image: "/product2.jpg" }
  // Add more mock products
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="product-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
          />
        ))}
      </div>
      {selectedProduct && (
        <AddToCartModal product={selectedProduct} closeModal={closeModal} />
      )}
      <Pagination />
    </div>
  );
};

export default ProductList;
