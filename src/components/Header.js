// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="header-right">
        <span>Profile Icon</span>
        <span>Cart Icon</span>
      </div>
    </header>
  );
};

export default Header;
