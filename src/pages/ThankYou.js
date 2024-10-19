// src/pages/ThankYou.js
import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
  const { productName } = useParams();

  return (
    <div>
      <h1>Thank You for Your Interest in {productName}!</h1>
    </div>
  );
};

export default ThankYou;
